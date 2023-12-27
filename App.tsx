import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Tabs from './navigation/Tabs';
import {StatusBar} from 'react-native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" />
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
