import Header from '@/components/header';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function HomeTab() {
  return (
    <SafeAreaView className="flex-1 px-4 py-1">
      <Header />
      <View className="mt-5 w-full flex-row items-center gap-2">
        <View className="relative flex-1">
          <Input placeholder="Search farmers or products" className="h-11 w-full pl-10" />
          <Ionicons
            name="search-outline"
            className="absolute left-2 top-1/2 -translate-y-1/2"
            size={24}
            color="#000"
          />
        </View>

        <View className="size-11 overflow-hidden rounded-lg bg-primary">
          <Image
            source={require('@/assets/images/settings.png')}
            className="h-full w-full p-3.5"
            resizeMode="contain"
          />
        </View>
      </View>

      <View className="m-2 mt-10 bg-black p-2">
        <Link href="/(auth)/sign-in">
          <Text className="text-white">Go to login</Text>
        </Link>
      </View>
      <View className="m-2 bg-primary p-2">
        <Link href="/(auth)/welcome">
          <Text className="text-white">Go to welcome screen</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
