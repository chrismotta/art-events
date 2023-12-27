import {API_URL} from './constants';

type ResponseType = {
  data: GalleryEvent[];
  pagination: GalleryEventPagination;
};

export const getEvents = async () => {
  const response = await fetch(API_URL);
  const jsonResponse = await response.json();
  return jsonResponse as ResponseType;
};
