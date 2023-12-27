import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {NO_EVENTS} from '../../lib/wording';

const WarningText = () => (
  <View style={styles.warningContainer}>
    <Text style={styles.warningText}>{NO_EVENTS}</Text>
  </View>
);

export default WarningText;
