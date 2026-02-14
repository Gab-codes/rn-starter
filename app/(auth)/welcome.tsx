import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Dimensions, Image, TouchableOpacity, View } from 'react-native';
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
    heading: 'Connect & Trade',
    description:
      'Easily connect with other farmers and buyers in your community. Share resources and grow together.',
    image: require('@/assets/images/welcome-2.png'),
  },
  {
    id: 3,
    heading: 'Grow Your Business',
    description:
      'Access tools and resources to expand your agricultural business. Reach more customers and increase profits.',
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
    <View className="flex-row items-center justify-center gap-2">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          className={`h-2 rounded-full transition-all ${
            index === currentStep ? 'w-8 bg-green-700' : 'w-2 bg-gray-300'
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

  const step = ONBOARDING_STEPS[currentStep];

  return (
    <View className="flex-1 bg-white">
      {/* Header with Logo */}
      <View className="items-center justify-center pb-4 pt-12">
        <Image
          source={require('@/assets/images/react-native-reusables-light.png')}
          style={{ width: 80, height: 80 }}
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
          style={{ height: height * 0.45 }}
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

        {/* Text Content */}
        <Animated.View
          key={`text-${step.id}`}
          entering={FadeIn.delay(200).duration(400)}
          exiting={FadeOut.duration(200)}
          className="mb-8 gap-3">
          <Text className="text-center text-3xl font-bold text-foreground">{step.heading}</Text>
          <Text className="text-center text-base leading-6 text-muted-foreground">
            {step.description}
          </Text>
        </Animated.View>

        {/* Spacer to push buttons to bottom */}
        <View className="flex-1" />

        {/* Step Indicators */}
        <View className="mb-6">
          <StepIndicators currentStep={currentStep} totalSteps={ONBOARDING_STEPS.length} />
        </View>

        {/* Navigation Buttons */}
        <View className="gap-3 pb-8">
          {currentStep === ONBOARDING_STEPS.length - 1 ? (
            <Button
              onPress={handleGetStarted}
              className="h-[60px] bg-green-700 active:bg-green-800">
              <Text className="font-semibold text-white">Get Started</Text>
            </Button>
          ) : (
            <Button onPress={handleNext} className="bg-green-700 active:bg-green-800">
              <Text className="font-semibold text-white">Next</Text>
            </Button>
          )}

          <TouchableOpacity onPress={handleSkip} className="py-3" activeOpacity={0.7}>
            <Text className="text-center font-semibold text-green-700">Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
