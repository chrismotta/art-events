import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Main from '../Main';
import EventDetails from '../EventDetails';

export type RootStackParamList = {
  EventsList: undefined;
  EventDetails: {
    event: GalleryEvent;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator id="mainStack">
      <Stack.Screen
        name="EventsList"
        component={Main}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="EventDetails" component={EventDetails} options={{}} />
    </Stack.Navigator>
  );
};

export default MainStack;
