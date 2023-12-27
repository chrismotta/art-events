import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Image, Text, View, useWindowDimensions} from 'react-native';
import RenderHTML from 'react-native-render-html';
import HeartRegular from '../../components/icons/HeartRegular';
import HeartSolid from '../../components/icons/HeartSolid';
import DetailsLayout from '../../layouts/DetailsLayout';
import {EVENT_ERROR} from '../../lib/wording';
import {RootStackParamList} from '../../navigation/MainStack';
import {captionStyles, styles, tagsStyles} from './styles';
import {DateTime} from 'luxon';
import Tag from '../../components/Tag';

const EventDetails: FC<
  NativeStackScreenProps<RootStackParamList, 'EventDetails'>
> = props => {
  const {event} = props.route.params;
  const {width} = useWindowDimensions();

  if (!event) {
    return (
      <View>
        <Text>{EVENT_ERROR}</Text>
      </View>
    );
  }
  const startDate = DateTime.fromISO(event.start_date);

  const day = startDate.toFormat('cccc');
  const date = startDate.toFormat('DD');
  const when = `${day}, ${date} | ${event.start_time} - ${event.end_time}`;

  return (
    <DetailsLayout>
      <Image source={{uri: event.image_url}} style={styles.eventImage} />

      <View style={styles.info}>
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
