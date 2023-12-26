import AsyncStorage from '@react-native-async-storage/async-storage';

const FAV_KEY = 'favorites';

export const resetStorage = async () => {
  try {
    await AsyncStorage.removeItem(FAV_KEY);
  } catch (e) {
    throw new Error();
  }
};

export const getFromStorage = async () => {
  try {
    // await resetStorage();
    const value = await AsyncStorage.getItem(FAV_KEY);
    const eventsList = (value ? JSON.parse(value) : []) as number[];
    return eventsList;
  } catch (e) {
    throw new Error();
  }
};

export const addToStorage = async (eventId: number) => {
  try {
    const favorites = await getFromStorage();
    if (favorites) {
      favorites.push(eventId);
      console.log('🔎  >> addToStorage  >> favorites:', favorites.length);
      await AsyncStorage.setItem(FAV_KEY, JSON.stringify(favorites));
    }
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

export const removeFromStorage = async (eventId: number) => {
  try {
    const favorites = await getFromStorage();
    if (favorites) {
      const filtered = favorites.filter(id => id !== eventId);
      console.log('🔎  >> removeFromStorage  >> filtered:', filtered.length);
      await AsyncStorage.setItem(FAV_KEY, JSON.stringify(filtered));
    }
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
