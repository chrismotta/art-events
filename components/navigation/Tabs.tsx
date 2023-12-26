import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MainStack from './MainStack';
import Favorites from '../Favorites/Favorites';
import HeartSolid from '../svg/HeartSolid';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator id="Tabs">
      <Tab.Screen
        name="Main"
        component={MainStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: HeartSolid,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
