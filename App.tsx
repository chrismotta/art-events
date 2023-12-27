import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Tabs from './navigation/Tabs';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
