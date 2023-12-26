import React, {FC} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import HeartRegular from '../svg/HeartRegular';
import HeartSolid from '../svg/HeartSolid';
import {RootStackParamList} from '../navigation/MainStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

//TODO: fix this any

const tagsStyles = {
  p: {
    margin: 0,
    marginTop: 10,
  },
  em: {
    fontStyle: 'italic',
    color: '#046',
  },
} as const;

const captionStyles = {
  p: {
    margin: 0,
    fontStyle: 'italic',
    color: '#999',
    fontSize: 10,
  },
} as const;

const EventDetails: FC<
  NativeStackScreenProps<RootStackParamList, 'EventDetails'>
> = props => {
  const {event} = props.route.params;
  const {width} = useWindowDimensions();

  if (!event) {
    return (
      <View>
        <Text>This event no longer exists</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.eventCard}>
        <Image source={{uri: event.image_url}} style={styles.eventImage} />
        <View style={styles.actions}>
          <View>{true ? <HeartRegular /> : <HeartSolid />}</View>
          <View style={styles.caption}>
            <RenderHTML
              source={{html: event?.hero_caption ?? ''}}
              tagsStyles={captionStyles}
              contentWidth={width}
              defaultTextProps={{numberOfLines: 1, ellipsizeMode: 'tail'}}
            />
          </View>
        </View>
        <Text style={styles.title}>{event.title}</Text>
        <RenderHTML
          source={{html: event?.description ?? ''}}
          tagsStyles={tagsStyles}
          contentWidth={width}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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

export default EventDetails;
