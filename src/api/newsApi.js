import { newsApi, apiErrorHandler } from './main';

export const getNews = async () => {
  const { data } = await newsApi.get().catch(apiErrorHandler);
  return data;
};
