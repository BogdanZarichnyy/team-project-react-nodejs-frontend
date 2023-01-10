import { petsApi, apiErrorHandler } from './main';

export const getAllPets = async () => {
  const { data } = await petsApi.get().catch(apiErrorHandler);
  return data;
};

export const addNewPet = async adsData => {
  const { data } = await petsApi.post(null, adsData).catch(apiErrorHandler);
  return data;
};

export const deletePet = async adsData => {
  const { data } = await petsApi.delete(`${adsData}`).catch(apiErrorHandler);
  return data;
};
