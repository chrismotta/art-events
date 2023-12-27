import {StyleSheet} from 'react-native';
import {aqua} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: aqua.primary,
    borderRadius: 8,
    paddingVertical: 4,
    width: 70,
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
});
