import { createSelector } from '@reduxjs/toolkit';

const userId = state => state.user.userData._id;
export const getSellAdsSelector = state => state.ads.sale;
export const getFoundAdsSelector = state => state.ads.lostFound;
export const getShareAdsSelector = state => state.ads.inGoodHands;
export const getFavoriteAdsSelector = state => state.ads.favorite;
export const getPersonalAdsSelector = state => state.ads.personal;

export const createSelectorFunc = params => {
  let selector;
  switch (params) {
    case 'sell':
      selector = getSellAdsSelector;
      break;
    case 'for-free':
      selector = getShareAdsSelector;
      break;
    case 'lost-found':
      selector = getFoundAdsSelector;
      break;
    case 'favorite':
      return getFavoriteAdsSelector;
    case 'userAds':
      return getPersonalAdsSelector;

    default:
      break;
  }

  return createSelector(selector, userId, (selector, userId) => {
    let data = [];
    for (let i = 0; i < selector.length; i++) {
      const arr = selector[i].followers;
      data.push(
        arr.indexOf(userId) === -1
          ? { ...selector[i], isFavorite: false }
          : { ...selector[i], isFavorite: true }
      );
    }

    return data;
  });
};
