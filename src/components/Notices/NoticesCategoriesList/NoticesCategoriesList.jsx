import s from './NoticesCategoriesList.module.scss';
import { ModalProvider } from '../../ModalRework';

import NoticesCategoriesItem from '../NoticesCategoriesItem/NoticesCategoriesItem';

export default function NoticeCategoriesList() {

    return (
        <ul className={s.noticeList}> 
            <ModalProvider styles={s.modalThumbNoticesPage}>   
                <NoticesCategoriesItem isAddedByMe={false} />
                <NoticesCategoriesItem isAddedByMe={true}/>
                <NoticesCategoriesItem isAddedByMe={false}/>
                <NoticesCategoriesItem />
                <NoticesCategoriesItem />
                <NoticesCategoriesItem />
                <NoticesCategoriesItem />
                <NoticesCategoriesItem />
            </ModalProvider>
        </ul>
    )
}