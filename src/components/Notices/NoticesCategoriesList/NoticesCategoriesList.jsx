import { useSelector } from 'react-redux';

import s from './NoticesCategoriesList.module.scss';
import { createSelectorFunc } from '../../../store/ads/index';

import NoticesCategoriesItem from '../NoticesCategoriesItem/NoticesCategoriesItem';

export default function NoticeCategoriesList({ categoryType }) {
  const categoryArray = useSelector(createSelectorFunc(categoryType)); //! Этот селектор можешь использовать для всех категорий массивов.

  return (
    <ul className={s.noticeList}>
      {categoryArray.length &&
        categoryArray.map(notice => {
          return <NoticesCategoriesItem notice={notice} key={notice._id} />;
        })}
    </ul>
  );
}
