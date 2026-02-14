import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

export default function SignUp() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerClassName="sm:flex-1 items-center justify-center p-4 py-8 sm:py-4 sm:p-6 mt-safe"
      keyboardDismissMode="interactive">
      <View className="w-full flex-1 items-center justify-center gap-4 p-4">
        <Text className="text-3xl font-bold">Create Account Agrixa Account</Text>
        <Text className="mt-2 text-center text-muted-foreground">
          Fill your information below or register with your social account
        </Text>

        <View className="w-full">
          <Text className="text-lg font-semibold"> Name</Text>
          <Input
            value={fullName}
            onChangeText={(fullName) => setFullName(fullName)}
            placeholder="Enter your name"
            className="h-[49px]"
          />
        </View>
        <View className="w-full">
          <Text className="text-lg font-semibold">Email</Text>
          <Input
            keyboardType="email-address"
            autoComplete="email"
            placeholder="Enter your email"
            className="h-[49px]"
            value={fullName}
            onChangeText={(fullName) => setFullName(fullName)}
          />
        </View>
        <View className="w-full">
          <Text className="text-lg font-semibold">Email</Text>
          <Input
            placeholder="Enter your password"
            className="h-[49px]"
            secureTextEntry={true}
            value={fullName}
            onChangeText={(fullName) => setFullName(fullName)}
          />
        </View>

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
    </ScrollView>
  );
}
