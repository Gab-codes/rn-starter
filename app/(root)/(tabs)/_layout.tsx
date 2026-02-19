import { Text } from '@/components/ui/text';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

// Import tab screens
import Order from './order';
import Explore from './explore';
import Home from '.';
import Chat from './chat';
import Profile from './profile';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: true,
    tabBarBackground: () => <View style={{ backgroundColor: '#F6F6F6' }} />,
    tabBarStyle: {
      borderTopWidth: 1,
      paddingBottom: 6,
      paddingTop: 6,
    },
  };

  return (
    <Tab.Navigator
      screenOptions={{
        ...screenOptions,
        tabBarActiveTintColor: '#073E2E',
        tabBarInactiveTintColor: '#62626299',
      }}>
      <Tab.Screen
        name="index"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} size={size} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text className="text-xs font-medium" style={{ color }}>
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="explore"
        component={Explore}
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'compass' : 'compass-outline'} size={size} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text className="text-xs font-medium" style={{ color }}>
              Explore
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="order"
        component={Order}
        options={{
          title: 'Order',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'list' : 'list-outline'} size={size} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text className="text-xs font-medium" style={{ color }}>
              Order
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="chat"
        component={Chat}
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'}
              size={size}
              color={color}
            />
          ),
          tabBarLabel: ({ color }) => (
            <Text className="text-xs font-medium" style={{ color }}>
              Chat
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text className="text-xs font-medium" style={{ color }}>
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function TabsLayout() {
  return <TabBar />;
}
