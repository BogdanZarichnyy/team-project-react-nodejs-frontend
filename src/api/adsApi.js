import { adsApi, apiErrorHandler } from './main';
import { URL } from '../constants';

export const getShareAds = async ({ payload }) => {
  const { data } = await adsApi
    .get(`${URL.HANDS}&${URL.QUERY}${payload}`)
    .catch(apiErrorHandler);
  return data;
};

export const getSellAds = async ({ payload }) => {
  const { data } = await adsApi
    .get(`${URL.SALE}&${URL.QUERY}${payload}`)
    .catch(apiErrorHandler);
  return data;
};

export const getFoundAds = async ({ payload }) => {
  const { data } = await adsApi
    .get(`${URL.FOUND}&${URL.QUERY}${payload}`)
    .catch(apiErrorHandler);
  return data;
};

export const addNewAds = async adsData => {
  const { data } = await adsApi.post(null, adsData).catch(apiErrorHandler);
  return data;
};

export const deleteAds = async adsData => {
  const { data } = await adsApi.delete(`${adsData}`).catch(apiErrorHandler);
  return data;
};

export const toggleFavoriteAds = async adsData => {
  const { data } = await adsApi
    .post(`${URL.FAVORITES}/${adsData}`)
    .catch(apiErrorHandler);
  return data;
};

export const getFavoriteAds = async ({ payload }) => {
  const { data } = await adsApi
    .get(`${URL.FAVORITES}?${URL.QUERY}${payload}`)
    .catch(apiErrorHandler);
  return data;
};

export const getOwnAds = async ({ payload }) => {
  const { data } = await adsApi
    .get(`${URL.OWNADS}?${URL.QUERY}${payload}`)
    .catch(apiErrorHandler);
  return data;
};
