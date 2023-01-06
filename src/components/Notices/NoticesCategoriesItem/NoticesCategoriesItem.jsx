import { useState, useContext } from 'react';

import ModalNotice from '../ModalNotice'
import IconComponent from '../../IconComponent';
import { ModalContext } from '../../ModalRework';

import s from './NoticesCategoriesItem.module.scss';
import img from '../../../images/about.png';


export default function NoticesCategoriesItem({isAddedByMe}) {
    const [addedToFavorite, setAddedToFavorite] = useState(false);
    const [isLogedIn, setisLoggedIn] = useState(true);

    const { handleModal } = useContext(ModalContext);

    const clickAddFavorite = (event) => {
        if (!isLogedIn) {
            alert('Please log in!')
            event.currentTarget.blur()
            return
        }

        setAddedToFavorite(!addedToFavorite);
        event.currentTarget.blur()
    }

    const handleClickOpen = () => {
        handleModal(
            <ModalNotice onClick={clickAddFavorite} isAddedTofavorite={addedToFavorite} />, s.modalBody
        );
    };

    return (
        <>
            <li className={s.noticeItem}>
                <div className={s.noticeThumb}>
                    <img className={s.noticeImage} src={img} alt="Pet"/>
                    <p className={s.categoryType}>In good hands</p>
                    <div className={s.noticeFavoriteButtonThumb}>
                        <button className={s.noticeFavoriteButton} onClick={clickAddFavorite}>
                            {addedToFavorite ?
                                <>
                                    <IconComponent classname={s.removeFavoriteIcon} iconname="trashIcon"/>
                                </>
                                :
                                <>
                                    <IconComponent classname={s.favoriteIcon} iconname="favoriteIcon"/>
                                </>
                            }                            
                        </button>
                    </div>                    
                </div>
                <div className={s.noticeDecription}>
                    <h3 className={s.noticeTitle}>Сute dog looking for a home</h3>
                    <ul className={s.petInfoList}>
                        <li className={s.petInfoLItem}>
                            <p className={s.petInfoLType}>Breed:</p>
                            <p className={s.petInfoLValue}>Pomeranian</p>
                        </li>
                        <li className={s.petInfoLItem}>
                            <p className={s.petInfoLType}>Place:</p>
                            <p className={s.petInfoLValue}>Lviv</p>
                        </li>
                        <li className={s.petInfoLItem}>
                            <p className={s.petInfoLType}>Age:</p>
                            <p className={s.petInfoLValue}>one year</p>
                        </li>
                    </ul>
                    <div className={isAddedByMe ? s.personalNoticeButtonsThumb : s.noticeButtonsThumb}>
                        <button className={s.noticeLearnMoreButton} onClick={handleClickOpen}>Learn more</button>
                        {isAddedByMe &&
                            <button className={s.noticeDeleteButton}>
                                Delete
                                <IconComponent classname={s.trashIcon} iconname="trashIcon"/>
                            </button>
                        }                        
                    </div>                    
                </div>
            </li>
        </>
    )
    
}