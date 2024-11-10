import { Tabs } from 'expo-router';
import React from 'react';
import { useFonts } from 'expo-font';

import EvilIcons from '@expo/vector-icons/EvilIcons';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    'Playfair-Display': require('@/assets/fonts/PlayfairDisplay-Regular.ttf'),
    'Playfair-Display-Bold': require('@/assets/fonts/PlayfairDisplay-Bold.ttf'),

  });

  

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => (
            <EvilIcons name="search" size={24} color="black" />)
        }}
      />
    
      <Tabs.Screen
        name="explore"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
     </Tabs>
  );
}
