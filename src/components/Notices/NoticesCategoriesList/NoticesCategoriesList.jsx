import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import moment from 'moment';

import {
  getSellAdsFetch,
  getShareAdsFetch,
  getFoundAdsFetch,
  getFavoriteAdsFetch,
  getUserAdsFetch,
} from '../../../store/ads';
import { createSelectorFunc, getAdsLoadingSelector } from '../../../store/ads/index';

import { ModalProvider } from '../../ModalRework';
import NoticesCategoriesItem from '../NoticesCategoriesItem/NoticesCategoriesItem';
import Loader from '../../LoaderV1/Loader';

import s from './NoticesCategoriesList.module.scss';

export default function NoticeCategoriesList({ categoryType }) {
  const dispatch = useDispatch();
  const categoryArray = useSelector(createSelectorFunc(categoryType));
  const isLoading = useSelector(getAdsLoadingSelector);

  useEffect(() => {
    if (categoryType === 'sell') {
      dispatch(getSellAdsFetch());
    } else if (categoryType === 'for-free') {
      dispatch(getShareAdsFetch());
    } else if (categoryType === 'lost-found') {
      dispatch(getFoundAdsFetch());
    } else if (categoryType === 'favorite') {
      dispatch(getFavoriteAdsFetch());
    } else if (categoryType === 'own') {
      dispatch(getUserAdsFetch());
    }
  }, [dispatch, categoryType]);

  return (
    <ul className={s.noticeList}>
      <ModalProvider>
        {isLoading === true
          ? <Loader />
          : (
            categoryArray.length 
              ? [...categoryArray]
              .sort((a, b) => moment(b.createdAt) - moment(a.createdAt))
              .map(notice => {
              return <NoticesCategoriesItem notice={notice} key={notice._id} />;
              })
              : <h3 className={s.noAdsTitle}>No ads in this category</h3>
          )
        }          
      </ModalProvider>
    </ul>
  );
}
