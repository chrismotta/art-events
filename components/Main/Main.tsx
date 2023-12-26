import React, {FC} from 'react';
import Header from '../Header';
import EventsList from '../EventsList';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import useGetEvents from '../../hooks/useGetEvents';

const Main: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {events} = useGetEvents();

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header />
      <EventsList eventsList={events} />
    </SafeAreaView>
  );
};

export default Main;
