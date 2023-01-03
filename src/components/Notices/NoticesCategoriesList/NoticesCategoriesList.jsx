import s from './NoticesCategoriesList.module.scss';

import NoticesCategoriesItem from '../NoticesCategoriesItem/NoticesCategoriesItem';

export default function NoticeCategoriesList() {

    return (
        <ul className={s.noticeList}>            
            <NoticesCategoriesItem isAddedByMe={false} />
            <NoticesCategoriesItem isAddedByMe={true}/>
            <NoticesCategoriesItem isAddedByMe={false}/>
            <NoticesCategoriesItem />
            <NoticesCategoriesItem />
            <NoticesCategoriesItem />
            <NoticesCategoriesItem />
            <NoticesCategoriesItem />
        </ul>
    )
}