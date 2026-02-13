import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export default function NotificationsTab() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">Notifications</Text>
      <Text className="mt-2 text-muted-foreground">Check your notifications</Text>
    </View>
  );
}
