import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export default function ProfileTab() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">Profile</Text>
      <Text className="mt-2 text-muted-foreground">View your profile</Text>
    </View>
  );
}
