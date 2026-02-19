import { ScrollView, View, Pressable, TouchableOpacity, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Text } from '@/components/ui/text';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { loginFn } from '@/services/auth';
import { isValidEmail } from '@/lib/utils';
import { AxiosError } from 'axios';
import { Alert } from '@/components/ui/alert';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react-native';

export default function SignIn() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const loginMutation = useMutation<any, AxiosError<BackendError>, SignInForm>({
    mutationFn: ({ email, password }) => loginFn(email, password),
    onSuccess: () => router.replace('/(root)/(tabs)'),
  });

  const onSubmit = (data: SignInForm) => {
    loginMutation.mutate(data);
  };

  const isLoading = loginMutation.isPending;

  const backendError =
    loginMutation.error instanceof AxiosError
      ? loginMutation.error.response?.data?.message
      : loginMutation.isError
        ? 'Something went wrong'
        : null;

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="interactive"
      contentContainerClassName="flex-1 items-center justify-start p-5 pt-20 pb-8">
      <View className="w-full max-w-md gap-4">
        {/* Header */}
        <View className="px-6">
          <Text className="text-center text-2xl font-bold">Welcome Back</Text>
          <Text className="mt-2 text-center text-muted-foreground">
            Enter your credentials to access your account
          </Text>
        </View>

        {/* Backend Error */}
        <Alert
          visible={!!backendError}
          message={backendError || ''}
          variant="error"
          onClose={() => loginMutation.reset()}
        />

        {/* Email */}
        <View>
          <Label className="text-lg font-semibold">Email</Label>
          <Controller
            control={control}
            name="email"
            rules={{
              required: 'Email is required',
              validate: (value) => isValidEmail(value) || 'Enter a valid email address',
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                value={value}
                onBlur={onBlur}
                onChangeText={(v) => {
                  onChange(v.trim());
                  if (loginMutation.isError) loginMutation.reset();
                }}
                placeholder="Enter your email"
                className="h-[49px]"
                keyboardType="email-address"
                autoComplete="email"
                autoCapitalize="none"
              />
            )}
          />
          {errors.email && (
            <Text className="mt-1 text-xs text-red-500">{errors.email.message}</Text>
          )}
        </View>

        {/* Password */}
        <View>
          <Label className="text-lg font-semibold">Password</Label>

          <Controller
            control={control}
            name="password"
            rules={{
              required: 'Password is required',
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View className="relative">
                <Input
                  value={value}
                  onBlur={onBlur}
                  onChangeText={(v) => {
                    onChange(v);
                    if (loginMutation.isError) loginMutation.reset();
                  }}
                  placeholder="Enter your password"
                  secureTextEntry={!showPassword}
                  className="h-[49px] pr-12"
                />

                <Pressable
                  onPress={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-0 h-[49px] justify-center">
                  {/* Replace with whatever icon library you're using */}
                  <Text className="text-muted-foreground">
                    {showPassword ? (
                      <EyeOff size={20} color="#6B7280" />
                    ) : (
                      <Eye size={20} color="#6B7280" />
                    )}
                  </Text>
                </Pressable>
              </View>
            )}
          />
        </View>

        {/* Forgot password */}
        <View className="items-end">
          <TouchableOpacity onPress={() => router.push('/(auth)/forgot-password')}>
            <Text className="text-xs font-semibold text-primary">Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Submit */}
        <Button
          onPress={handleSubmit(onSubmit)}
          className="h-[60px] w-full"
          disabled={!isValid || isLoading}>
          <Text className="text-lg font-semibold text-white">
            {isLoading ? 'Processing...' : 'Login'}
          </Text>
        </Button>

        {/* Divider */}
        <View className="my-2 w-full flex-row items-center">
          <View className="h-[0.7px] flex-1 bg-[#8D8D8D]" />
          <Text className="mx-3 text-[#8D8D8D]">Or Sign In with</Text>
          <View className="h-[0.7px] flex-1 bg-[#8D8D8D]" />
        </View>

        {/* Google */}
        <Pressable
          onPress={() => console.log('Google login')}
          className="h-[52px] w-full flex-row items-center justify-center gap-2 rounded-md border border-gray-300">
          <Image source={require('@/assets/images/google.png')} className="size-6" />
          <Text className="font-semibold">Continue with Google</Text>
        </Pressable>

        {/* Footer */}
        <View className="flex-row items-center justify-center pt-2">
          <Text className="text-[#626262]">Don’t have an account?</Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/sign-up')} className="ml-1">
            <Text className="font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
