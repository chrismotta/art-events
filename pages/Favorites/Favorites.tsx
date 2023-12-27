import React, {FC} from 'react';
import EventsList from '../../components/EventsList';
import useGetEvents from '../../hooks/useGetEvents';
import MainLayout from '../../layouts/MainLayout';

const Favorites: FC<{showFavoritesOnly: boolean}> = ({showFavoritesOnly}) => {
  const {events} = useGetEvents();

  return (
    <MainLayout>
      <EventsList eventsList={events} showFavoritesOnly={showFavoritesOnly} />
    </MainLayout>
  );
};

export default Favorites;
