import { adsApi, apiErrorHandler } from './main';

export const getShareAds = async () => {
  const { data } = await adsApi.get().catch(apiErrorHandler);
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
  const { data } = await adsApi.delete(null, adsData).catch(apiErrorHandler);
  console.log('api', data);
  return data;
};
