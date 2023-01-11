import { newsApi, apiErrorHandler } from './main';

export const getNews = async (searchData = '') => {
  const { data } = await newsApi
    .get(`query=${searchData}`)
    .catch(apiErrorHandler);
  return data;
};
