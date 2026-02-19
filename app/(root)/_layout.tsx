import { useAuthStore } from '@/store';
import { Redirect, Stack } from 'expo-router';

export default function RootLayout() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Redirect href="/(auth)/welcome" />;
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
