import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export default function CreateTab() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold">Create</Text>
      <Text className="mt-2 text-muted-foreground">Create something new</Text>
    </View>
  );
}
