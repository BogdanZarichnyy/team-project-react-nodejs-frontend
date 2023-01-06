import { Outlet } from "react-router-dom";

import AddNoticeButton from '../../components/Notices/AddNoticeButton';
import SearchInput from '../../components/SearchInput';
import NoticesCategoriesNav from '../../components/Notices/NoticesCategoriesNav';
import NoticeCategoriesList from '../../components/Notices/NoticesCategoriesList';

import s from './NoticesPage.module.scss';

export default function NoticesPage() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Find your favorite pet</h2>
      <SearchInput styles={s.formThumb} />
      <div className={s.noticesThumb}>
        <NoticesCategoriesNav />
        <AddNoticeButton />
      </div>
      <Outlet />   
    </div>
  );
}
