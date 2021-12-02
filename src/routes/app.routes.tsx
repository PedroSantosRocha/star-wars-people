import React from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Personages } from '../screens/Personages';
import { Favorites } from '../screens/Favorites';

const Tab = createBottomTabNavigator();

function TabRoutes() {
  const theme = useTheme();

  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.colors.main,
      tabBarInactiveTintColor: theme.colors.main_light,
      tabBarStyle: {
        paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        height: 88,
        backgroundColor: theme.colors.header,
        borderRadius: 50,
        position: 'absolute',
      },
    }}
    >
      <Tab.Screen 
        name="Personagens"
        component={Personages}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="home"
              size={size}
              color={color}
            />
          ))
        }}
      />

      <Tab.Screen 
        name="Favoritos"
        component={Favorites}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name="favorite"
              size={size}
              color={color}
            />
          ))
        }}
      />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Tabs"
        component={TabRoutes}
      />
    </Stack.Navigator>
  );
}