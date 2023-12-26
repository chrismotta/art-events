import {useEffect, useState} from 'react';
import {getFromStorage, updateStorage} from '../lib/storage';

const useFavorites = () => {
  const [favoriteIdsList, setFavoriteIdsList] = useState<number[]>([]);

  useEffect(() => {
    getFromStorage().then(favorites => {
      setFavoriteIdsList(favorites);
    });
  }, []);

  const getIsFavorite = (eventId: number): boolean => {
    return favoriteIdsList.includes(eventId);
  };

  const getFavoritesList = (eventsList: GalleryEvent[]): GalleryEvent[] => {
    const favoritesList = eventsList.filter(event => {
      return getIsFavorite(event.id);
    });
    return favoritesList;
  };

  const toggleFavorite = (eventId: number) => {
    const isFav = getIsFavorite(eventId);
    const updatedList = isFav
      ? favoriteIdsList.filter(id => id !== eventId)
      : [...favoriteIdsList, eventId];
    updateStorage(updatedList);
    setFavoriteIdsList(updatedList);
  };

  return {favoriteIdsList, getIsFavorite, getFavoritesList, toggleFavorite};
};

export default useFavorites;
