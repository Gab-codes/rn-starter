import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

export default function SignIn() {
  const router = useRouter();

  const handleSignIn = () => {
    // Demo: just navigate to main app
    router.replace('/(root)/(tabs)');
  };

  return (
    <View className="flex-1 items-center justify-center gap-4 p-4">
      <Text className="text-2xl font-bold">Sign In</Text>
      <Button onPress={handleSignIn}>
        <Text>Sign In Demo</Text>
      </Button>
    </View>
  );
}
