export const getUserSelector = state => state.user.userData;
export const getUserLoadingSelector = state => state.user.isLoading;
export const getUserErrorSelector = state => state.user.error;
export const getUserAvatarSelector = state => state.user.userData.photo;
export const getUserTokenSelector = state => state.user.token;
