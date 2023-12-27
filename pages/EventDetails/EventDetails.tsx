import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DateTime} from 'luxon';
import React, {FC, useContext} from 'react';
import {Image, Text, View, useWindowDimensions} from 'react-native';
import RenderHTML from 'react-native-render-html';
import FavButton from '../../components/EventCard/FavButton';
import Tag from '../../components/Tag';
import DetailsLayout from '../../layouts/DetailsLayout';
import {EVENT_ERROR} from '../../lib/wording';
import {RootStackParamList} from '../../navigation/MainStack';
import {captionStyles, styles, tagsStyles} from './styles';
import {MainContext} from '../../context/globalContext';

const EventDetails: FC<
  NativeStackScreenProps<RootStackParamList, 'EventDetails'>
> = props => {
  const {event} = props.route.params;
  const {width} = useWindowDimensions();
  const {getIsFavorite, toggleFavorite} = useContext(MainContext);

  if (!event) {
    return (
      <View>
        <Text>{EVENT_ERROR}</Text>
      </View>
    );
  }
  const isFav = getIsFavorite(event.id);
  const startDate = DateTime.fromISO(event.start_date);

  const day = startDate.toFormat('cccc');
  const date = startDate.toFormat('DD');
  const when = `${day}, ${date} | ${event.start_time} - ${event.end_time}`;

  return (
    <DetailsLayout>
      <Image source={{uri: event.image_url}} style={styles.eventImage} />

      <View style={styles.info}>
        <View style={styles.actions}>
          <FavButton isFav={isFav} onPress={() => toggleFavorite(event.id)} />
          <View style={styles.caption}>
            <RenderHTML
              source={{html: event?.hero_caption ?? ''}}
              tagsStyles={captionStyles}
              contentWidth={width}
              defaultTextProps={{numberOfLines: 1, ellipsizeMode: 'tail'}}
            />
          </View>
        </View>
        <View style={styles.details}>
          <Tag>WHEN</Tag>
          <Text style={styles.date}>{when}</Text>
        </View>
        <View style={styles.details}>
          <Tag>WHERE</Tag>
          <Text style={styles.date}>{event.location}</Text>
        </View>
        <Text style={styles.title}>{event.title}</Text>
        <RenderHTML
          source={{html: event?.description ?? ''}}
          tagsStyles={tagsStyles}
          contentWidth={width}
        />
      </View>
    </DetailsLayout>
  );
};

export default EventDetails;
