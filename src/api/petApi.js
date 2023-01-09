import { petsApi, apiErrorHandler } from './main';

export const addNewPet = async adsData => {
  const { data } = await petsApi.post(null, adsData).catch(apiErrorHandler);
  return data;
};

export const deletePet = async adsData => {
  const { data } = await petsApi.delete(null, adsData).catch(apiErrorHandler);
  console.log('api', data);
  return data;
};
