import React, {FC} from 'react';
import EventsList from '../../components/EventsList';
import useGetEvents from '../../hooks/useGetEvents';
import MainLayout from '../../layouts/MainLayout';

const Home: FC = () => {
  const {events} = useGetEvents();

  return (
    <MainLayout>
      <EventsList eventsList={events} />
    </MainLayout>
  );
};

export default Home;
