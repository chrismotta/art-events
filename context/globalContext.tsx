import React, {FC, createContext, useMemo} from 'react';
import useFavorites from '../hooks/useFavorites';
import useGetEvents from '../hooks/useGetEvents';

type MainContextType = {
  events: GalleryEvent[];
  loading: boolean;
  favoritesList: GalleryEvent[];
  toggleFavorite: (eventId: number) => void;
  getIsFavorite: (eventId: number) => boolean;
};

const MainContext = createContext<MainContextType>({
  events: [],
  loading: false,
  favoritesList: [],
  toggleFavorite: () => {},
  getIsFavorite: () => false,
});

const MainProvider: FC<{children: React.ReactNode}> = ({children}) => {
  const {getIsFavorite, toggleFavorite, getFavoritesList} = useFavorites();
  const {events, loading} = useGetEvents();
  const favoritesList = useMemo(
    () => getFavoritesList(events),
    [events, getFavoritesList],
  );

  return (
    <MainContext.Provider
      value={{
        events,
        loading,
        favoritesList,
        getIsFavorite,
        toggleFavorite,
      }}>
      {children}
    </MainContext.Provider>
  );
};

export {MainContext, MainProvider};
