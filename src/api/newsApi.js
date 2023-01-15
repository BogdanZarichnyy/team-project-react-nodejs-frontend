import { URL } from '../constants';
import axios from 'axios';

const userNewsUrl = `${URL.BASE}${URL.NEWS}`;

export const getNews = async (searchData = '') => {
  const { data } = await axios.get(`${userNewsUrl}?${URL.QUERY}${searchData}`);
  return data;
};
