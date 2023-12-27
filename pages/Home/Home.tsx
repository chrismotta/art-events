import React, {FC, useContext} from 'react';
import EventsList from '../../components/EventsList';
import MainLayout from '../../layouts/MainLayout';
import Loading from '../../components/Loading';
import {MainContext} from '../../context/globalContext';

const Home: FC<{showFavoritesOnly?: boolean}> = ({
  showFavoritesOnly = false,
}) => {
  const {events, loading} = useContext(MainContext);

  return (
    <MainLayout>
      {loading && <Loading />}
      {!loading && (
        <EventsList eventsList={events} showFavoritesOnly={showFavoritesOnly} />
      )}
    </MainLayout>
  );
};

export default Home;
