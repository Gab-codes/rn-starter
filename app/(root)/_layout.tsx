import SafeScreen from '@/components/safe-screen';
import { Redirect, Stack } from 'expo-router';

export default function RootLayout() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Redirect href="/welcome" />;
  }
  return (
    <SafeScreen>
      <Stack screenOptions={{ headerShown: false }} />;
    </SafeScreen>
  );
}
