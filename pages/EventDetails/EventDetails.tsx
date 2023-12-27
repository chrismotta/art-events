import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {Image, ScrollView, Text, View, useWindowDimensions} from 'react-native';
import RenderHTML from 'react-native-render-html';
import HeartRegular from '../../components/icons/HeartRegular';
import HeartSolid from '../../components/icons/HeartSolid';
import {EVENT_ERROR} from '../../lib/wording';
import {RootStackParamList} from '../../navigation/MainStack';
import {captionStyles, styles, tagsStyles} from './styles';

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

export default EventDetails;
