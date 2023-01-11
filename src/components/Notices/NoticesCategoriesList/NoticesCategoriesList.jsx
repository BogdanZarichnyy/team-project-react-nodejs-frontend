import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import s from './NoticesCategoriesList.module.scss';
import { ModalProvider } from '../../ModalRework';
import {
  getSellAdsSelector,
  getFoundAdsSelector,
  getShareAdsSelector,
  createSelectorFunc,
} from '../../../store/ads/index';
import {
  getSellAdsFetch,
  getShareAdsFetch,
  getFoundAdsFetch,
} from '../../../store/ads';
import NoticesCategoriesItem from '../NoticesCategoriesItem/NoticesCategoriesItem';

export default function NoticeCategoriesList({ categoryType }) {
  const dispatch = useDispatch();
  const noticesSell = useSelector(getSellAdsSelector);
  const categoryArray = useSelector(createSelectorFunc(categoryType)); //! Этот селектор можешь использовать для всех категорий массивов.
  const noticesFound = useSelector(getFoundAdsSelector);
  const noticesShare = useSelector(getShareAdsSelector);

  useEffect(() => {
    if (categoryType === 'sell') {
      dispatch(getSellAdsFetch());
    } else if (categoryType === 'for-free') {
      dispatch(getShareAdsFetch());
    } else if (categoryType === 'lost-found') {
      dispatch(getFoundAdsFetch());
    }
  }, [dispatch, categoryType]);

  return (
    <ul className={s.noticeList}>
      <ModalProvider>
        {categoryType === 'sell' &&
          noticesSell.map(notice => {
            return <NoticesCategoriesItem notice={notice} key={notice._id} />;
          })}
        {categoryType === 'for-free' &&
          noticesShare.map(notice => {
            return <NoticesCategoriesItem notice={notice} key={notice._id} />;
          })}
        {categoryType === 'lost-found' &&
          noticesFound.map(notice => {
            return <NoticesCategoriesItem notice={notice} key={notice._id} />;
          })}
      </ModalProvider>
    </ul>
  );
}
