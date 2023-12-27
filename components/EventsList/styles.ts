import {StyleSheet} from 'react-native';
import {gray} from '../../theme/colors';

export const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  warningContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningText: {
    fontSize: 20,
    color: gray.secondary,
  },
});
