import React, {FC, ReactNode} from 'react';
import {SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import {styles} from './styles';

const MainLayout: FC<{children: ReactNode}> = ({children}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <LinearGradient colors={['#acd9d0', '#ffffff']} style={styles.gradient}>
        {children}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default MainLayout;
