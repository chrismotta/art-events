import React, {FC} from 'react';
import {Button, Image, Text, View, useWindowDimensions} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/MainStack';
import FavButton from './FavButton';
import {VIEW_DETAILS} from '../../lib/wording';
import {captionStyles, styles, tagsStyles} from './styles';

type ScreenProp = NativeStackNavigationProp<RootStackParamList, 'EventDetails'>;

const EventCard: FC<{
  event: GalleryEvent;
  isFav: boolean;
  onFavPress: (eventId: number) => void;
}> = ({event, isFav, onFavPress}) => {
  const {width} = useWindowDimensions();
  const navigation = useNavigation<ScreenProp>();

  const onEventTap = (currentEvent: GalleryEvent) => {
    navigation.navigate('EventDetails', {event: currentEvent});
  };

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
      <Button title={VIEW_DETAILS} onPress={() => onEventTap(event)} />
    </View>
  );
};

export default EventCard;
