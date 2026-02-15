import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Platform } from 'react-native';
import * as Haptics from 'expo-haptics';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function lightHaptic() {
  if (Platform.OS !== 'web') {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }
}
