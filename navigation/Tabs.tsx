import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HeartSolid from '../components/icons/HeartSolid';
import Home from '../components/icons/Home';
import Favorites from '../pages/Favorites/Favorites';
import MainStack from './MainStack';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Tab.Navigator
        id="Tabs"
        screenOptions={{
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Main"
          component={MainStack}
          options={{
            headerStyle: {backgroundColor: 'red'},
            tabBarStyle: {backgroundColor: 'white'},
            headerTitleStyle: {color: 'red'},
            headerBackgroundContainerStyle: {backgroundColor: 'red'},
            headerShown: false,
            tabBarIcon: Home,
            unmountOnBlur: true,
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            headerShown: false,
            tabBarIcon: HeartSolid,
            unmountOnBlur: true,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Tabs;
