import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HeartSolid from '../components/icons/HeartSolid';
import Home from '../components/icons/Home';
import MainStack from './MainStack';
import {aqua} from '../theme/colors';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      id="Tabs"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: aqua.primary,
      }}>
      <Tab.Screen
        name="Main"
        children={() => <MainStack showFavoritesOnly={false} />}
        options={{
          headerShown: false,
          tabBarIcon: Home,
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Favorites"
        children={() => <MainStack showFavoritesOnly={true} />}
        options={{
          headerShown: false,
          tabBarIcon: HeartSolid,
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
