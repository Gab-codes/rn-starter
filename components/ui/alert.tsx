import { View, Pressable } from 'react-native';
import Animated, { FadeIn, SlideInDown, SlideOutUp } from 'react-native-reanimated';
import { Text } from '@/components/ui/text';
import { X, AlertCircle, CheckCircle, Info } from 'lucide-react-native';

type AlertVariant = 'error' | 'success' | 'info';

type AlertProps = {
  visible: boolean;
  message: string;
  variant?: AlertVariant;
  onClose?: () => void;
};

export function Alert({ visible, message, variant = 'error', onClose }: AlertProps) {
  if (!visible) return null;

  const variantStyles = {
    error: {
      container: 'bg-red-100 border-red-400',
      text: 'text-red-700',
      iconColor: '#B91C1C',
      Icon: AlertCircle,
    },
    success: {
      container: 'bg-green-100 border-green-400',
      text: 'text-green-700',
      iconColor: '#047857',
      Icon: CheckCircle,
    },
    info: {
      container: 'bg-blue-100 border-blue-400',
      text: 'text-blue-700',
      iconColor: '#1D4ED8',
      Icon: Info,
    },
  };

  const { container, text, iconColor, Icon } = variantStyles[variant];

  return (
    <Animated.View
      entering={SlideInDown.springify().damping(100).stiffness(300)}
      exiting={SlideOutUp.duration(1000)}
      layout={FadeIn}
      className={`w-full flex-row items-center gap-3 rounded-md border p-4 ${container}`}>
      <Icon size={20} color={iconColor} />

      <View className="flex-1">
        <Text className={`text-sm ${text}`}>{message}</Text>
      </View>

      <Pressable onPress={onClose} className="ml-2 justify-center" hitSlop={8}>
        <X size={18} color={iconColor} />
      </Pressable>
    </Animated.View>
  );
}
