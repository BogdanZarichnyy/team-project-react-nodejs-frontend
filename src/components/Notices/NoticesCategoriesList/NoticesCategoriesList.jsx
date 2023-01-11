import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import s from './NoticesCategoriesList.module.scss';
import { ModalProvider } from '../../ModalRework';
import { createSelectorFunc } from '../../../store/ads/index';
import {
  getSellAdsFetch,
  getShareAdsFetch,
  getFoundAdsFetch,
} from '../../../store/ads';
import NoticesCategoriesItem from '../NoticesCategoriesItem/NoticesCategoriesItem';

export default function NoticeCategoriesList({ categoryType }) {
  const dispatch = useDispatch();
  const categoryArray = useSelector(createSelectorFunc(categoryType));

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
        { [...categoryArray]
          .sort((a, b) => moment(b.updatedAt) - moment(a.updatedAt))
          .map(notice => {
            return <NoticesCategoriesItem notice={notice} key={notice._id} />;
          })
        }          
      </ModalProvider>
    </ul>
  );
}
