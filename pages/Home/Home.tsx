import React, {FC} from 'react';
import EventsList from '../../components/EventsList';
import useGetEvents from '../../hooks/useGetEvents';
import MainLayout from '../../layouts/MainLayout';
import Loading from '../../components/Loading';

const Home: FC<{showFavoritesOnly?: boolean}> = ({
  showFavoritesOnly = false,
}) => {
  const {events, loading} = useGetEvents();

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
