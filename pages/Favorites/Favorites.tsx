import React from 'react';
import EventsList from '../../components/EventsList';
import useGetEvents from '../../hooks/useGetEvents';
import MainLayout from '../../layouts/MainLayout';

const Favorites = () => {
  const {events} = useGetEvents();

  return (
    <MainLayout>
      <EventsList eventsList={events} showFavoritesOnly={true} />
    </MainLayout>
  );
};

export default Favorites;
