import {StyleSheet} from 'react-native';
import {blue, gray} from '../../theme/colors';

export const styles = StyleSheet.create({
  info: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    gap: 15,
    marginBottom: 10,
  },
  details: {
    flexGrow: 1,
    flexDirection: 'row',
    gap: 5,
    marginBottom: 5,
    alignItems: 'center',
  },
  date: {
    fontSize: 14,
    color: gray.primary,
  },
  caption: {
    width: '80%',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
  },
  eventImage: {
    width: '100%',
    height: 300,
  },
});

export const tagsStyles = StyleSheet.create({
  p: {
    margin: 0,
    marginTop: 10,
  },
  em: {
    fontStyle: 'italic',
    color: blue.primary,
  },
  h2: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 0,
    marginTop: 20,
  },
});

export const captionStyles = StyleSheet.create({
  p: {
    margin: 0,
    fontStyle: 'italic',
    color: gray.secondary,
    fontSize: 10,
  },
});
