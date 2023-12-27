import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Tabs from './navigation/Tabs';
import {MainProvider} from './context/globalContext';

function App(): React.JSX.Element {
  return (
    <MainProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </MainProvider>
  );
}

export default App;
