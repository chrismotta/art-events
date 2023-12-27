import React, {FC, useContext} from 'react';
import {FlatList} from 'react-native';
import {MainContext} from '../../context/globalContext';
import EventCard from '../EventCard/';
import WarningText from './WarningText';
import {styles} from './styles';

const EventsList: FC<{
  eventsList: GalleryEvent[];
  showFavoritesOnly?: boolean;
}> = ({eventsList, showFavoritesOnly = false}) => {
  const {getIsFavorite, favoritesList, toggleFavorite} =
    useContext(MainContext);

  const currentEventsList = showFavoritesOnly ? favoritesList : eventsList;

  if (!currentEventsList.length) {
    return <WarningText />;
  }

  return (
    <FlatList
      data={currentEventsList}
      style={styles.listContainer}
      renderItem={({item}) => (
        <EventCard
          event={item}
          isFav={getIsFavorite(item.id)}
          onFavPress={toggleFavorite}
        />
      )}
    />
  );
};

export default EventsList;
