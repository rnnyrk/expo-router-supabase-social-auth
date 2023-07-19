# Supabase Social Authentication with Expo Router

[A blog post that explains the process of creating Google/Apple logins with Supabase, accompanies this repository](https://rnny.nl/blog/expo-supabase-social-auth).

With this repository, I wanted to give an example and guidance on how to use Supabase Social Authentication together with Expo Router v2. Both Google Authentication as well as Apple Authentication are covered.

Some of the used technologies are opinionated and can be replaced:

- Styled Components
- Prettier (with sorting config)
- ESLint

## How to use

```sh
git clone git@github.com:rnnyrk/expo-router-supabase-social-auth.git YOUR_PROJECT
cd YOUR_PROJECT
npm install
```

Create an environment file on `.env.development` and fill in the required properties:

```bash
EXPO_PUBLIC_SUPABASE_URL_DEV=
EXPO_PUBLIC_SUPABASE_PUBLIC_KEY_DEV=
EAS_PROJECT_ID=
```

Create a build for a simulator

- iOS `eas build --profile simulator --platform ios`
- Android `eas build --profile development --platform android`

OR Create a build for a device

- iOS `eas device:create` && `eas build --profile development --platform ios`
- Android `eas build --profile development --platform android`
