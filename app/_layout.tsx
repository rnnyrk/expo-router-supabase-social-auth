import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import { SupabaseProvider } from 'utils/SupabaseContext';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <SupabaseProvider>
          <Stack
            initialRouteName="index"
            screenOptions={{ header: () => null }}
          />
        </SupabaseProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
