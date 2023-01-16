import { URL } from '../constants';
import axios from 'axios';

const userNewsUrl = `${URL.BASE}${URL.FRIENDS}`;

export const getFriends = async () => {
  const { data } = await axios.get(userNewsUrl);
  return data;
};
