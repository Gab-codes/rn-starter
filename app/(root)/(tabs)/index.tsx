import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export default function HomeTab() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">Home</Text>
      <Text className="mt-2 text-muted-foreground">Welcome to home tab</Text>
    </View>
  );
}
