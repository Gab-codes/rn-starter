import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { lightHaptic } from '@/lib/utils';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Dimensions, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeOut, SlideInRight, SlideOutLeft } from 'react-native-reanimated';

const { height } = Dimensions.get('window');

interface OnboardingStep {
  id: number;
  heading: string;
  description: string;
  image: any;
}

const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    id: 1,
    heading: 'Welcome to AgroMart',
    description: 'Connecting farmers, producers and buyers across Lagos',
    image: require('@/assets/images/welcome-1.png'),
  },
  {
    id: 2,
    heading: 'Fast & Reliable Delivery',
    description: 'Track your order in real time and enjoy fast delivery to your home or business',
    image: require('@/assets/images/welcome-2.png'),
  },
  {
    id: 3,
    heading: 'Fresh From the Farm',
    description: 'Get high quality products directly from trusted partner farms.',
    image: require('@/assets/images/welcome-3.png'),
  },
];

const StepIndicators = ({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) => {
  return (
    <View className="flex-row items-center justify-center gap-[5px]">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          className={`h-2 rounded-full transition-all ${
            index === currentStep ? 'w-[17.72px] bg-primary' : 'w-[7.09px] bg-gray-300'
          }`}
        />
      ))}
    </View>
  );
};

export default function Welcome() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < ONBOARDING_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSkip = () => {
    router.push('/(auth)/sign-up');
  };

  const handleGetStarted = () => {
    router.push('/(auth)/sign-up');
  };

  const handleSignIn = () => {
    router.push('/(auth)/sign-in');
  };

  const step = ONBOARDING_STEPS[currentStep];

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header with Logo */}
      <View className="items-center justify-center pb-10 pt-14">
        <Image
          source={require('@/assets/images/logo.png')}
          style={{ width: '100%', height: 50 }}
          resizeMode="contain"
        />
      </View>

      {/* Main Content Area */}
      <View className="flex-1 px-6">
        {/* Image Section - 45vh */}
        <Animated.View
          key={`image-${step.id}`}
          entering={SlideInRight.duration(400)}
          exiting={SlideOutLeft.duration(400)}
          style={{ height: height * 0.4 }}
          className="mb-8">
          <Image
            source={step.image}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 16,
            }}
            resizeMode="contain"
          />
        </Animated.View>
        {/* Spacer to push buttons to bottom */}
        <View className="flex-1 pt-8" />

        {/* Text Content */}
        <Animated.View
          key={`text-${step.id}`}
          entering={FadeIn.delay(200).duration(400)}
          exiting={FadeOut.duration(200)}
          className="mb-8 gap-3 px-6">
          <Text className="mx-auto max-w-52 text-center text-4xl font-bold text-foreground">
            {step.heading}
          </Text>
          <Text className="text-center text-lg leading-6 text-muted-foreground">
            {step.description}
          </Text>
        </Animated.View>

        {/* Step Indicators */}
        <View className="mb-6">
          <StepIndicators currentStep={currentStep} totalSteps={ONBOARDING_STEPS.length} />
        </View>

        {/* Navigation Buttons */}
        <View className="gap-3 pb-10">
          {currentStep === ONBOARDING_STEPS.length - 1 ? (
            <Button
              onPress={() => (lightHaptic(), handleGetStarted())}
              className="h-[60px] active:bg-green-800">
              <Text className="text-lg font-semibold text-white">Get Started</Text>
            </Button>
          ) : (
            <Button
              onPress={() => {
                (lightHaptic(), handleNext());
              }}
              className="h-[60px] active:bg-green-800">
              <Text className="text-lg font-semibold text-white">Next</Text>
            </Button>
          )}
          <View className="flex-row items-center justify-center pt-2">
            <Text className="text-[#626262]">Already have an account?</Text>
            <TouchableOpacity onPress={handleSignIn} className="ml-1">
              <Text className="font-bold">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
