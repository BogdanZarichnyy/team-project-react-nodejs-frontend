export const getUserSelector = state => state.user.userData;
export const getPetsSelector = state => state.user.userPets;
export const getUserLoadingSelector = state => state.user.isLoading;
export const getUserErrorSelector = state => state.user.error;
export const getUserAvatarSelector = state => state.user.userData.avatar;
export const getUserTokenSelector = state => state.user.token;
export const getUserLoggedSelector = state => state.user.isLoggedIn;
