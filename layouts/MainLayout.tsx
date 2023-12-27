import React, {FC, ReactNode} from 'react';
import {SafeAreaView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import {styles} from './styles';
import {aqua} from '../theme/colors';

const MainLayout: FC<{children: ReactNode}> = ({children}) => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.safeArea}>
        <Header />
        <LinearGradient
          colors={[aqua.secondary, 'white']}
          style={styles.gradient}>
          {children}
        </LinearGradient>
      </SafeAreaView>
    </View>
  );
};

export default MainLayout;
