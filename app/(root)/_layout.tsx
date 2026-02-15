// import SafeScreen from '@/components/safe-screen';
import { Redirect, Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />;
    </>
  );
}
