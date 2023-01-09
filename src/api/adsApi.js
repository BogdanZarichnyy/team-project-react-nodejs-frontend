import axios from 'axios';
import { adsApi, apiErrorHandler } from './main';

export const getShareAds = async () => {
  const { data } = await adsApi.get().catch(apiErrorHandler);
  return data;
};

export const getSellAds = async () => {
  const { data } = await axios
    .get(
      'https://test-team-project-react-nodejs-production.up.railway.app/api/ads?category=sale'
    )
    .catch(apiErrorHandler);
  return data;
};
// export const getSellAds = async () => {
//   const { data } = await adsApi
//     .get(null, null, { params: { category: 'sale' } })
//     .catch(apiErrorHandler);
//   return data;
// };

export const getFoundAds = async () => {
  const { data } = await adsApi
    .get(null, null, { params: { category: 'found' } })
    .catch(apiErrorHandler);
  return data;
};

export const addNewAds = async adsData => {
  const { data } = await adsApi
    .post(null, adsData, { headers: { 'Content-Type': 'multipart/form-data' } })
    .catch(apiErrorHandler);
  return data;
};
