import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

import theme from '@styles/theme';
import { SupabaseProvider } from '@utils/SupabaseContext';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <SupabaseProvider>
          <StatusBar style="dark" />
          <Stack
            initialRouteName="index"
            screenOptions={{ header: () => null }}
          />
        </SupabaseProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
