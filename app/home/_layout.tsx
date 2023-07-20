import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { DrawerItem } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import theme from '@styles/theme';
import { useSupabase } from '@utils/SupabaseContext';
import { LogoHeader } from '@common/layout';

const DrawerLabelStyle = {
  color: theme.colors.gray800,
  fontSize: 24,
};

function CustomDrawerContent({ drawerPosition, navigation }: any) {
  const insets = useSafeAreaInsets();
  const { signOut } = useSupabase();

  return (
    <ScrollView
      contentContainerStyle={[
        {
          paddingTop: insets.top + 4,
          paddingLeft: drawerPosition === 'left' ? insets.left : 0,
          paddingRight: drawerPosition === 'right' ? insets.right : 0,
        },
      ]}
      style={{ flex: 1, marginTop: 24 }}
    >
      <DrawerItem
        label="Home"
        onPress={() => navigation.navigate('index')}
        labelStyle={DrawerLabelStyle}
      />
      <DrawerItem
        label="Settings"
        onPress={() => navigation.navigate('settings')}
        labelStyle={DrawerLabelStyle}
      />
      <DrawerItem
        label="Logout"
        onPress={signOut}
        labelStyle={DrawerLabelStyle}
      />
    </ScrollView>
  );
}

export default function DrawerLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Drawer
        initialRouteName="index"
        screenOptions={{
          header: () => <LogoHeader showDrawer />,
          drawerPosition: 'right',
          drawerLabelStyle: {
            color: theme.colors.gray,
          },
        }}
        drawerContent={(props: DrawerContentComponentProps) => {
          return (
            <CustomDrawerContent
              drawerPosition="right"
              {...props}
            />
          );
        }}
      >
        <Drawer.Screen name="index" />
        <Drawer.Screen name="settings" />
      </Drawer>
    </>
  );
}
