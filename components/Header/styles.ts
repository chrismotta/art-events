import {StyleSheet} from 'react-native';
import {gray} from '../../theme/colors';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
    shadowColor: 'black',
    borderBottomColor: gray.tertiary,
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: 'times new roman',
    fontSize: 18,
    fontWeight: 'bold',
    color: gray.primary,
    borderColor: gray.primary,
    borderWidth: 1,
    padding: 10,
  },
});
