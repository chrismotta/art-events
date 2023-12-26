import {useEffect, useState} from 'react';

const API_URL = 'https://api.artic.edu/api/v1/events';

const useGetEvents = () => {
  const [events, setEvents] = useState<GalleryEvent[]>([]);

  const getEvents = async () => {
    type ResponseType = {
      data: GalleryEvent[];
      pagination: GalleryEventPagination;
    };

    const response = await fetch(API_URL);
    const {data}: ResponseType = await response.json();

    setEvents(data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return {events};
};

export default useGetEvents;
