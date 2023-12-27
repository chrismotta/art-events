import React, {FC, ReactNode} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {styles} from './styles';

const DetailsLayout: FC<{children: ReactNode}> = ({children}) => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView}>{children}</ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default DetailsLayout;
