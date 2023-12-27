import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './styles';
import {aqua} from '../../theme/colors';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={aqua.primary} />
    </View>
  );
};

export default Loading;
