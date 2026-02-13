import { Redirect, Stack } from 'expo-router';

export default function RootLayout() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Redirect href="/welcome" />;
  }
  return <Stack screenOptions={{ headerShown: false }} />;
}
