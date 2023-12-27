import {useEffect, useState} from 'react';
import {getEvents} from '../lib/fetch';

const useGetEvents = () => {
  const [events, setEvents] = useState<GalleryEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getEvents()
      .then(({data}) => {
        setEvents(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {events, loading};
};

export default useGetEvents;
