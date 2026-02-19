import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { Label } from '@/components/ui/label';
import { useRouter } from 'expo-router';
import { Dispatch, SetStateAction, useState } from 'react';
import { ScrollView, View, Pressable, TouchableOpacity, Image, Platform } from 'react-native';
import { lightHaptic } from '@/lib/utils';

/* ---------------- validation helpers ---------------- */

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email: string) {
  return emailRegex.test(email);
}

function isValidPassword(password: string) {
  return password.length >= 8;
}

/* ---------------- component ---------------- */

export default function SignUp() {
  const router = useRouter();

  const [form, setForm] = useState<SignUpForm>({
    name: '',
    email: '',
    password: '',
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  function updateField<K extends keyof SignUpForm>(key: K, value: SignUpForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleCheckbox(setter: Dispatch<SetStateAction<boolean>>) {
    lightHaptic();
    setter((prev) => !prev);
  }

  /* ---------------- derived validation ---------------- */

  const isNameValid = form.name.trim().length > 0;
  const isEmailValid = isValidEmail(form.email);
  const isPasswordValid = isValidPassword(form.password);

  const isFormValid = isNameValid && isEmailValid && isPasswordValid && acceptTerms;

  function handleSubmit() {
    if (!isFormValid) return;

    console.log('Form data:', form);
    router.push('/(auth)/sign-in');
  }

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="interactive"
      contentContainerClassName="flex-1 items-center justify-start p-5 pt-20 pb-8">
      <View className="w-full max-w-md gap-4">
        {/* Header */}
        <View className="px-6">
          <Text className="text-center text-2xl font-bold">Create Agrixa Account</Text>
          <Text className="mt-2 text-center text-muted-foreground">
            Fill your information below or register with your social account
          </Text>
        </View>

        {/* Name */}
        <View>
          <Label htmlFor="name" nativeID="name" className="text-lg font-semibold">
            Name
          </Label>
          <Input
            id="name"
            value={form.name}
            onChangeText={(v) => updateField('name', v)}
            placeholder="Enter your name"
            className="h-[49px]"
          />
        </View>

        {/* Email */}
        <View>
          <Label htmlFor="email" nativeID="email" className="text-lg font-semibold">
            Email
          </Label>
          <Input
            id="email"
            value={form.email}
            onChangeText={(v) => updateField('email', v.trim())}
            placeholder="Enter your email"
            className="h-[49px]"
            keyboardType="email-address"
            autoComplete="email"
            autoCapitalize="none"
          />
          {form.email.length > 0 && !isEmailValid && (
            <Text className="mt-1 text-xs text-red-500">Please enter a valid email address</Text>
          )}
        </View>

        {/* Password */}
        <View>
          <Label htmlFor="password" nativeID="password" className="text-lg font-semibold">
            Password
          </Label>
          <Input
            id="password"
            value={form.password}
            onChangeText={(v) => updateField('password', v)}
            placeholder="Enter your password"
            secureTextEntry
            className="h-[49px]"
          />
          {form.password.length > 0 && !isPasswordValid && (
            <Text className="mt-1 text-xs text-red-500">
              Password must be at least 6 characters
            </Text>
          )}
        </View>

        {/* Checkboxes */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <Checkbox
              checked={rememberMe}
              onCheckedChange={() => toggleCheckbox(setRememberMe)}
              className="size-3.5"
              id="remember-me"
            />
            <Label
              className="text-xs"
              htmlFor="remember-me"
              onPress={() => toggleCheckbox(setRememberMe)}>
              Remember me
            </Label>
          </View>

          <View className="flex-row items-center gap-2">
            <Checkbox
              checked={acceptTerms}
              onCheckedChange={() => toggleCheckbox(setAcceptTerms)}
              variant="transparent"
              id="accept-terms"
              className="rounded-full"
            />
            <Label
              className="text-xs"
              htmlFor="accept-terms"
              onPress={() => toggleCheckbox(setAcceptTerms)}>
              Agree with <Text className="text-xs text-primary">Terms & Conditions</Text>
            </Label>
          </View>
        </View>

        {/* Submit */}
        <Button onPress={handleSubmit} className="h-[60px] w-full" disabled={!isFormValid}>
          <Text className="text-lg font-semibold text-white">Sign Up</Text>
        </Button>

        <View className="my-2 w-full flex-row items-center">
          <View className="h-[0.7px] flex-1 bg-[#8D8D8D]" />
          <Text className="mx-3 text-[#8D8D8D]">Or Sign Up with</Text>
          <View className="h-[0.7px] flex-1 bg-[#8D8D8D]" />
        </View>

        {/* Google Login */}
        <Pressable
          onPress={() => console.log('Google login')}
          className="h-[52px] w-full flex-row items-center justify-center gap-2 rounded-md border border-gray-300">
          <Image source={require('@/assets/images/google.png')} className="size-6" />
          <Text className="font-semibold">Continue with Google</Text>
        </Pressable>

        {/* Footer */}
        <View className="flex-row items-center justify-center pt-2">
          <Text className="text-[#626262]">Already have an account?</Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/sign-in')} className="ml-1">
            <Text className="font-bold">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
