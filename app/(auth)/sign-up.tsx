import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

export default function SignUp() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center gap-4 bg-white p-4">
      <Text className="text-3xl font-bold">Create Account</Text>
      <Text className="mt-2 text-center text-muted-foreground">
        Sign up to get started with AgroMart
      </Text>

      <View className="mt-8 w-full gap-3">
        <Button onPress={() => router.push('/(auth)/sign-in')} className="active:bg-green-800">
          <Text className="text-white">Sign Up</Text>
        </Button>

        <Button
          onPress={() => router.push('/(auth)/sign-in')}
          variant="ghost"
          className="border border-gray-300">
          <Text className="text-gray-900">Already have an account? Sign In</Text>
        </Button>
      </View>
    </View>
  );
}
