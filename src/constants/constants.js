import axios from 'axios';

export const BASE_URL =
  'https://test-team-project-react-nodejs-production.up.railway.app/api/';

export const userApi = axios.create({
  baseURL: BASE_URL,
});
