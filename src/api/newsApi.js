import { newsApi, apiErrorHandler } from './main';
import { URL } from '../constants';

export const getNews = async (searchData = '') => {
  const { data } = await newsApi
    .get(`?${URL.QUERY}${searchData}`)
    .catch(apiErrorHandler);
  return data;
};
