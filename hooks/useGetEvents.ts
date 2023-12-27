import {useEffect, useState} from 'react';
import {getEvents} from '../lib/fetch';

const useGetEvents = () => {
  const [events, setEvents] = useState<GalleryEvent[]>([]);

  useEffect(() => {
    getEvents().then(({data}) => {
      setEvents(data);
    });
  }, []);

  return {events};
};

export default useGetEvents;
