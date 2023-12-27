import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  eventCard: {
    backgroundColor: 'white',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
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
    color: '#999',
    fontSize: 10,
  },
});
