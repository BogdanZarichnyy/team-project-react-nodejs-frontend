import { friendsApi, apiErrorHandler } from './main';

export const getFriends = async () => {
  const { data } = await friendsApi.get().catch(apiErrorHandler);
  return data;
};
