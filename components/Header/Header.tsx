import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header: FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Art Institute of Chicago API</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    padding: 15,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 6,
    },
  },
  title: {
    fontFamily: 'times new roman',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    borderBlockColor: '#999',
    borderWidth: 1,
    padding: 10,
  },
});

export default Header;
