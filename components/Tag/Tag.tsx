import React, {FC, ReactNode} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const Tag: FC<{children: ReactNode}> = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Tag;
