import { adsApi, apiErrorHandler } from './main';

export const getShareAds = async () => {
  const { data } = await adsApi
    .get('?category=inGoodHands')
    .catch(apiErrorHandler);
  return data;
};

export const getSellAds = async () => {
  const { data } = await adsApi.get('?category=sale').catch(apiErrorHandler);
  return data;
};

export const getFoundAds = async () => {
  const { data } = await adsApi
    .get('?category=lostFound')
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
    .post(`/favorites/${adsData}`)
    .catch(apiErrorHandler);
  return data;
};

export const getFavoriteAds = async () => {
  const { data } = await adsApi.get('/favorites').catch(apiErrorHandler);
  console.log('favorite api', data);
  return data;
};

export const getOwnAds = async () => {
  const { data } = await adsApi.get('/my_notices').catch(apiErrorHandler);
  console.log('own api', data);
  return data;
};
