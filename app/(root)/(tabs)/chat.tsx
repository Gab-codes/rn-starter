import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export default function ChatTab() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">Chat</Text>
      <Text className="mt-2 text-muted-foreground">Chat with farmers or buyers</Text>
    </View>
  );
}
