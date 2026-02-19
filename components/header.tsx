import { View, Image } from 'react-native';
import { Text } from './ui/text';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View className="flex-row items-center justify-between">
      {/* Left */}
      <View className="flex-row items-center gap-2">
        <View className="size-12 overflow-hidden rounded-full">
          <Image
            source={require('@/assets/images/avatar.png')}
            className="h-full w-full"
            resizeMode="cover"
          />
        </View>

        <View>
          <Text className="text-base font-bold text-foreground">Hello, Gabriel</Text>
          <Text className="text-xs font-medium text-muted-foreground">
            What would you like to do today?
          </Text>
        </View>
      </View>

      {/* Right */}
      <View className="flex-row items-center gap-3">
        <Ionicons name="cart-outline" size={24} color="#000" />

        <View className="relative">
          <Ionicons name="notifications-outline" size={24} color="#000" />
          <View className="absolute -right-1 -top-1 size-[18px] items-center justify-center rounded-full bg-red-500">
            <Text className="text-[7px] font-medium text-white">99+</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
