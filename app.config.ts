import path from 'path';
import type { ConfigContext, ExpoConfig } from '@expo/config';

import { ClientEnv, Env } from './env';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  scheme: Env.BUNDLE_ID,
  name: Env.NAME,
  description: `${Env.NAME} Mobile App`,
  slug: 'expo-supabase-social-auth',
  version: Env.VERSION.toString(),
  orientation: 'portrait',
  icon: path.resolve(__dirname, 'src/assets/images/icon.png'),
  userInterfaceStyle: 'automatic',
  splash: {
    image: path.resolve(__dirname, 'src/assets/images/splash.png'),
    resizeMode: 'cover',
    backgroundColor: '#61C4E3',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: Env.BUNDLE_ID,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: path.resolve(__dirname, 'src/assets/images/adaptive-icon.png'),
      backgroundColor: '#FFFFFF',
    },
    package: Env.PACKAGE,
  },
  plugins: [
    'expo-router',
    [
      'app-icon-badge',
      {
        enabled: true,
        badges: [
          {
            text: Env.APP_ENV,
            type: 'banner',
            color: 'white',
          },
          {
            text: Env.VERSION.toString(),
            type: 'ribbon',
            color: 'white',
          },
        ],
      },
    ],
    [
      'expo-build-properties',
      {
        ios: {
          flipper: true,
        },
      },
    ],
  ],
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  extra: {
    ...ClientEnv,
    router: {
      origin: false,
    },
    eas: {
      projectId: '0fa689de-ea76-4074-b340-c6c4d2ec618c',
    },
  },
});
