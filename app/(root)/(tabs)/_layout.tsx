import { Text } from '@/components/ui/text';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Bell, Compass, HomeIcon, Plus, User } from 'lucide-react-native';

// Import tab screens
import Create from './create';
import Explore from './explore';
import Home from './index';
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
          tabBarLabel: ({ color }) => <Text>Home</Text>,
        }}
      />
      <Tab.Screen
        name="explore"
        component={Explore}
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, size }) => <Compass size={size} color={color} />,
          tabBarLabel: ({ color }) => <Text>Explore</Text>,
        }}
      />
      <Tab.Screen
        name="create"
        component={Create}
        options={{
          title: 'Create',
          tabBarIcon: ({ color, size }) => <Plus size={size} color={color} />,
          tabBarLabel: ({ color }) => <Text>Create</Text>,
        }}
      />
      <Tab.Screen
        name="notifications"
        component={Notifications}
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color, size }) => <Bell size={size} color={color} />,
          tabBarLabel: ({ color }) => <Text>Notifications</Text>,
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
          tabBarLabel: ({ color }) => <Text>Profile</Text>,
        }}
      />
    </Tab.Navigator>
  );
};

export default function TabsLayout() {
  return <TabBar />;
}
