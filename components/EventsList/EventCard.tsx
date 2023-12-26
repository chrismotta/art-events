import React, {FC} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/MainStack';
import FavButton from './FavButton';

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

type ScreenProp = NativeStackNavigationProp<RootStackParamList, 'EventDetails'>;

const EventCard: FC<{
  event: GalleryEvent;
  isFav: boolean;
  onFavPress: (eventId: number) => void;
}> = ({event, isFav, onFavPress}) => {
  const {width} = useWindowDimensions();
  const navigation = useNavigation<ScreenProp>();
  // const [isFav, setIsFav] = useState(false);

  const onEventTap = (currentEvent: GalleryEvent) => {
    navigation.navigate('EventDetails', {event: currentEvent});
  };

  // const onFavPress = () => {
  //   if (isFav) {
  //     removeFromStorage(event.id);
  //   } else {
  //     addToStorage(event.id);
  //   }
  //   setIsFav(prev => !prev);
  // };

  return (
    <View style={styles.eventCard}>
      <Image source={{uri: event.image_url}} style={styles.eventImage} />
      <View style={styles.actions}>
        <FavButton isFav={isFav} onPress={() => onFavPress(event.id)} />
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
        source={{html: event?.short_description ?? ''}}
        tagsStyles={tagsStyles}
        contentWidth={width}
      />
      <Button title="View Details" onPress={() => onEventTap(event)} />
    </View>
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

export default EventCard;
