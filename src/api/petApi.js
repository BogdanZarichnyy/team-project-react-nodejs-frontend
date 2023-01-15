import axios from 'axios';
import { URL } from '../constants';

const userPetsUrl = `${URL.BASE}${URL.PETS}`;

export const getAllPets = async () => {
  const { data } = await axios.get(userPetsUrl);
  return data;
};

export const addNewPet = async adsData => {
  const { data } = await axios.post(userPetsUrl, adsData);

  return data;
};

export const deletePet = async adsData => {
  const { data } = await axios.delete(`${userPetsUrl}/${adsData}`);

  return data;
};
