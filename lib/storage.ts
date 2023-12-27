import AsyncStorage from '@react-native-async-storage/async-storage';
import {FAV_KEY} from './constants';

export const resetStorage = async () => {
  try {
    await AsyncStorage.removeItem(FAV_KEY);
  } catch (e) {
    throw new Error();
  }
};

export const getFromStorage = async () => {
  try {
    const value = await AsyncStorage.getItem(FAV_KEY);
    const eventsList = (value ? JSON.parse(value) : []) as number[];
    return eventsList;
  } catch (e) {
    throw new Error();
  }
};

export const updateStorage = async (eventIdsList: number[]) => {
  try {
    await AsyncStorage.setItem(FAV_KEY, JSON.stringify(eventIdsList));
  } catch (e) {
    throw new Error();
  }
};

export const isFavorite = async (eventId: number) => {
  try {
    const favorites = await getFromStorage();
    if (favorites) {
      return favorites.includes(eventId);
    }
    return false;
  } catch (e) {
    throw new Error();
  }
};
