import { URL } from '../constants';
import axios from 'axios';

const adsBaseUrl = `${URL.BASE}${URL.NOTICES}`;

export const getShareAds = async ({ payload }) => {
  const { data } = await axios.get(
    `${adsBaseUrl}${URL.HANDS}&${URL.QUERY}${payload}`
  );

  return data;
};

export const getSellAds = async ({ payload }) => {
  const { data } = await axios.get(
    `${adsBaseUrl}${URL.SALE}&${URL.QUERY}${payload}`
  );

  return data;
};

export const getFoundAds = async ({ payload }) => {
  const { data } = await axios.get(
    `${adsBaseUrl}${URL.FOUND}&${URL.QUERY}${payload}`
  );

  return data;
};

export const addNewAds = async adsData => {
  const { data } = await axios.post(`${adsBaseUrl}`, adsData);

  return data;
};

export const deleteAds = async adsData => {
  const { data } = await axios.delete(`${adsBaseUrl}/${adsData}`);

  return data;
};

export const toggleFavoriteAds = async adsData => {
  const { data } = await axios.post(`${adsBaseUrl}${URL.FAVORITES}/${adsData}`);

  return data;
};

export const getFavoriteAds = async ({ payload }) => {
  const { data } = await axios.get(
    `${adsBaseUrl}${URL.FAVORITES}?${URL.QUERY}${payload}`
  );

  return data;
};

export const getOwnAds = async ({ payload }) => {
  const { data } = await axios.get(
    `${adsBaseUrl}${URL.OWNADS}?${URL.QUERY}${payload}`
  );

  return data;
};
