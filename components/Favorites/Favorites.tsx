import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useGetEvents from '../../hooks/useGetEvents';
import EventsList from '../EventsList';
import Header from '../Header';

const Favorites = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {events} = useGetEvents();

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header />
      <EventsList eventsList={events} showFavoritesOnly={true} />
    </SafeAreaView>
  );
};

export default Favorites;
