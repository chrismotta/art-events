import React, {FC} from 'react';
import {FlatList} from 'react-native';
import EventCard from '../EventCard/';
import useFavorites from '../../hooks/useFavorites';

const EventsList: FC<{
  eventsList: GalleryEvent[];
  showFavoritesOnly?: boolean;
}> = ({eventsList, showFavoritesOnly = false}) => {
  const {getIsFavorite, toggleFavorite, getFavoritesList} = useFavorites();

  const currentEventsList = showFavoritesOnly
    ? getFavoritesList(eventsList)
    : eventsList;

  const handleFavPress = (eventId: number) => {
    toggleFavorite(eventId);
  };

  return (
    <FlatList
      data={currentEventsList}
      style={{flex: 1}}
      renderItem={({item}) => (
        <EventCard
          event={item}
          isFav={getIsFavorite(item.id)}
          onFavPress={handleFavPress}
        />
      )}
    />
  );
};

export default EventsList;
