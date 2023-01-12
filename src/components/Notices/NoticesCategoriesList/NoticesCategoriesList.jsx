import { useSelector, useDispatch } from 'react-redux';

import moment from 'moment';

import { createSelectorFunc, getAdsLoadingSelector } from '../../../store/ads/index';

import { ModalProvider } from '../../ModalRework';
import NoticesCategoriesItem from '../NoticesCategoriesItem/NoticesCategoriesItem';
import Loader from '../../LoaderV1/Loader';

import s from './NoticesCategoriesList.module.scss';

export default function NoticeCategoriesList({ categoryType }) {
  const categoryArray = useSelector(createSelectorFunc(categoryType));
  const isLoading = useSelector(getAdsLoadingSelector);

  return (
    <ul className={s.noticeList}>
      <ModalProvider>
        {isLoading === true
          ? <Loader />
          : (
            categoryArray.length !== 0 
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
