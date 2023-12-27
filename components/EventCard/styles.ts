import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  eventCard: {
    backgroundColor: 'white',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {
      width: -6,
      height: 6,
    },
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    gap: 15,
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
    height: 200,
  },
});

export const tagsStyles = StyleSheet.create({
  p: {
    margin: 0,
    marginTop: 10,
  },
  em: {
    fontStyle: 'italic',
    color: '#046',
  },
});

export const captionStyles = StyleSheet.create({
  p: {
    margin: 0,
    fontStyle: 'italic',
    color: '#999',
    fontSize: 10,
  },
});
