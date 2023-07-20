/*
 * Env file to load and validate env variables
 * Be cautious; this file should not be imported into your source folder.
 * We split the env variables into two parts:
 * 1. Client variables: These variables are used in the client-side code (src folder).
 * 2. Build-time variables: These variables are used in the build process (app.config.ts file).
 * Import this file into the `app.config.ts` file to use environment variables during the build process. The client variables can then be passed to the client-side using the extra field in the `app.config.ts` file.
 * To access the client environment variables in your `src` folder, you can import them from `@env`. For example: `import Env from '@env'`.
 */
/**
 * 1st part: Import packages and Load your env variables
 * we use dotenv to load the correct variables from the .env file based on the APP_ENV variable (default is development)
 * APP_ENV is passed as an inline variable while executing the command, for example: APP_ENV=staging pnpm build:android
 */
const z = require('zod');

const packageJSON = require('./package.json');
const path = require('path');
const APP_ENV = process.env.APP_ENV ?? 'development';
const envPath = path.resolve(__dirname, `.env.${APP_ENV}`);

let APP_KEY_SUFFIX = 'DEV';
if (APP_ENV === 'staging') {
  APP_KEY_SUFFIX = 'ACC';
} else if (APP_ENV === 'production') {
  APP_KEY_SUFFIX = 'PROD';
}

require('dotenv').config({
  path: envPath,
});

/**
 * 2nd part: Define some static variables for the app
 * Such as: bundle id, package name, app name.
 *
 * You can add them to the .env file but we think it's better to keep them here as as we use prefix to generate this values based on the APP_ENV
 * for example: if the APP_ENV is staging, the bundle id will be com.obytes.staging
 */

const BUNDLE_ID = 'com.expobase'; // ios bundle id
const PACKAGE = 'com.expobase'; // android package name
const NAME = APP_KEY_SUFFIX === 'PROD' ? 'Expobase' : `Expobase ${APP_KEY_SUFFIX}`; // app name
const BUILD_VERSION = 2;

/**
 * We declare a function withEnvSuffix that will add a suffix to the variable name based on the APP_ENV
 * Add a suffix to variable env based on APP_ENV
 * @param {string} name
 * @returns  {string}
 */

const withEnvSuffix = (name) => {
  return APP_ENV === 'production' ? name : `${name}.${APP_ENV}`;
};

/**
 * 2nd part: Define your env variables schema
 * we use zod to define our env variables schema
 *
 * we split the env variables into two parts:
 *    1. client: These variables are used in the client-side code (`src` folder).
 *    2. buildTime: These variables are used in the build process (app.config.ts file). You can think of them as server-side variables.
 *
 * Main rules:
 *    1. If you need your variable on the client-side, you should add it to the client schema; otherwise, you should add it to the buildTime schema.
 *    2. Whenever you want to add a new variable, you should add it to the correct schema based on the previous rule, then you should add it to the corresponding object (clientEnvVariables or buildTimeVariables).
 *
 * Note: `z.string()` means that the variable exists and can be an empty string, but not `undefined`.
 * If you want to make the variable required, you should use `z.string().min(1)` instead.
 * Read more about zod here: https://zod.dev/?id=strings
 *
 */

const client = z.object({
  APP_ENV: z.enum(['development', 'staging', 'production']),
  APP_KEY_SUFFIX: z.enum(['DEV', 'ACC', 'PROD']),
  NAME: z.string(),
  BUNDLE_ID: z.string(),
  PACKAGE: z.string(),
  VERSION: z.string(),
  BUILD_VERSION: z.number(),

  // ADD YOUR CLIENT ENV VARS HERE
  EXPO_PUBLIC_SUPABASE_URL: z.string(),
  EXPO_PUBLIC_SUPABASE_PUBLIC_KEY: z.string(),
});

const buildTime = z.object({
  // ADD YOUR BUILD TIME ENV VARS HERE
  EAS_PROJECT_ID: z.string(),
});

/**
 * @type {Record<keyof z.infer<typeof client> , string | undefined>}
 */
const clientEnvVariables = {
  APP_ENV,
  APP_KEY_SUFFIX,
  NAME,
  BUNDLE_ID: withEnvSuffix(BUNDLE_ID),
  PACKAGE: withEnvSuffix(PACKAGE),
  VERSION: packageJSON.version,
  BUILD_VERSION,

  // ADD YOUR ENV VARS HERE TOO
  EXPO_PUBLIC_SUPABASE_URL: process.env[`EXPO_PUBLIC_SUPABASE_URL_${APP_KEY_SUFFIX}`],
  EXPO_PUBLIC_SUPABASE_PUBLIC_KEY: process.env[`EXPO_PUBLIC_SUPABASE_PUBLIC_KEY_${APP_KEY_SUFFIX}`],
};

/**
 * @type {Record<keyof z.infer<typeof buildTime> , string | undefined>}
 */
const buildTimeVariables = {
  // ADD YOUR ENV VARS HERE TOO
  EAS_PROJECT_ID: process.env.EAS_PROJECT_ID,
};

/**
 * 3rd part: Merge and Validate your env variables
 * We use zod to validate our env variables based on the schema we defined above
 * If the validation fails we throw an error and log the error to the console with a detailed message about missed variables
 * If the validation passes we export the merged and parsed env variables to be used in the app.config.ts file as well as a ClientEnv object to be used in the client-side code
 **/
const envVariables = {
  ...clientEnvVariables,
  ...buildTimeVariables,
};

const merged = buildTime.merge(client);
const parsed = merged.safeParse(envVariables);

if (parsed.success === false) {
  console.error(
    '❌ Invalid environment variables:',
    parsed.error.flatten().fieldErrors,

    `\n❌ Missing variables in .env.${APP_ENV} file, Make sure all required variables are defined in the .env.${APP_ENV} file.`,
    `\n💡 Tip: If you recently updated the .env.${APP_ENV} file and the error still persists, try restarting the server with the -cc flag to clear the cache.`,
  );
  throw new Error('Invalid environment variables, Check terminal for more details ');
}

const Env = parsed.data;
const ClientEnv = client.parse(clientEnvVariables);

module.exports = {
  Env,
  ClientEnv,
  withEnvSuffix,
};
