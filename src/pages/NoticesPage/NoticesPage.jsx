import AddNoticeButton from '../../components/AddNoticeButton';
import SearchInput from '../../components/SearchInput';
import NoticesCategoriesNav from '../../components/NoticesCategoriesNav';
import NoticeCategoriesList from '../../components/NoticesCategoriesList';

import s from './NoticesPage.module.scss';

export default function NoticesPage() {

    return (
        <div className={s.container}>
            <h2 className={s.title}>Find your favorite pet</h2>
            <SearchInput
                styles={s.formThumb}
            />
            <div className={s.noticesThumb}>
                <NoticesCategoriesNav /> 
                <AddNoticeButton />
            </div>            
            <NoticeCategoriesList />
        </div>
    )
}