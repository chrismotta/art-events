import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {APP_TITLE} from '../../lib/wording';

const Header: FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{APP_TITLE}</Text>
    </View>
  );
};

export default Header;
