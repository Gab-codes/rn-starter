import { Text } from '@/components/ui/text';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Compass, HomeIcon, MessageCircleMoreIcon, Plus, User2 } from 'lucide-react-native';

// Import tab screens
import Create from './create';
import Explore from './explore';
import Home from '.';
import Notifications from './notifications';
import Profile from './profile';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: true,
    tabBarStyle: {
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingTop: 8,
    },
  };

  return (
    <Tab.Navigator
      screenOptions={{
        ...screenOptions,
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#888888',
      }}>
      <Tab.Screen
        name="index"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <HomeIcon size={size} color={color} />,
          tabBarLabel: () => <Text>Home</Text>,
        }}
      />
      <Tab.Screen
        name="explore"
        component={Explore}
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, size }) => <Compass size={size} color={color} />,
          tabBarLabel: () => <Text>Explore</Text>,
        }}
      />
      <Tab.Screen
        name="create"
        component={Create}
        options={{
          title: 'Create',
          tabBarIcon: ({ color, size }) => <Plus size={size} color={color} />,
          tabBarLabel: () => <Text>Order</Text>,
        }}
      />
      <Tab.Screen
        name="notifications"
        component={Notifications}
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color, size }) => <MessageCircleMoreIcon size={size} color={color} />,
          tabBarLabel: () => <Text>Notifications</Text>,
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <User2 size={size} color={color} />,
          tabBarLabel: () => <Text>Profile</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

export default function TabsLayout() {
  return <TabBar />;
}
