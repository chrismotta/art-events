import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header: FC = () => {
  return (
    <View style={styles.header}>
      <Text>Art Institute of Chicago API</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    padding: 15,
  },
});

export default Header;
