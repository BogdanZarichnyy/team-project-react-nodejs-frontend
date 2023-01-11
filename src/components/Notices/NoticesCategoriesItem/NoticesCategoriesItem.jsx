import { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { toast } from "react-toastify";

import ModalNotice from '../ModalNotice'
import IconComponent from '../../IconComponent';
import { ModalContext } from '../../ModalRework';
import { getUserLoggedSelector, getUserSelector } from '../../../store/user';

import s from './NoticesCategoriesItem.module.scss';
import defaultImage from '../../../images/defaultImage.png';


export default function NoticesCategoriesItem({notice}) {
    const [addedToFavorite, setAddedToFavorite] = useState(false);
    const isLoggedIn = useSelector(getUserLoggedSelector);
    const user = useSelector(getUserSelector);

    const { handleModal } = useContext(ModalContext);

    const clickAddFavorite = (event) => {
        if (!isLoggedIn) {
            toast.warning(`This service is restricted to authorized users only.Please register or log in.`)
            event.currentTarget.blur()
            return
        }

        setAddedToFavorite(!addedToFavorite);
        event.currentTarget.blur()
    }

    const handleClickOpen = () => {
        handleModal(
            <ModalNotice onClick={clickAddFavorite} notice={notice} />, s.modalBody
        );
    };

    return (
        <>
            <li className={s.noticeItem}>
                <div className={s.noticeThumb}>
                    <img className={s.noticeImage} src={notice.photo === '' ? defaultImage : notice.photo} alt="Pet"/>
                    <p className={s.categoryType}>
                        {(notice.category === 'sale' && 'Sell') ||
                            (notice.category === 'inGoodHands' && 'In good hands') ||
                            (notice.category === 'lostFound' && 'Lost/found')
                        }
                    </p>
                    <div className={s.noticeFavoriteButtonThumb}>
                        <button className={s.noticeFavoriteButton} onClick={clickAddFavorite}>
                            <IconComponent classname={addedToFavorite ? s.favoriteIconActive : s.favoriteIcon} iconname="favoriteIcon"/>
                        </button>
                    </div>                    
                </div>
                <div className={user._id === notice?.owner?._id ? s.noticeDecriptionOwner : s.noticeDecription}>
                    <h3 className={s.noticeTitle}>{notice.addTitle}</h3>
                    <ul className={s.petInfoList}>
                        <li className={s.petInfoLItem}>
                            <p className={s.petInfoLType}>Breed:</p>
                            <p className={s.petInfoLValue}>{notice.breed}</p>
                        </li>
                        <li className={s.petInfoLItem}>
                            <p className={s.petInfoLType}>Place:</p>
                            <p className={s.petInfoLValue}>{notice.location}</p>
                        </li>
                        <li className={s.petInfoLItem}>
                            <p className={s.petInfoLType}>Age:</p>
                            <p className={s.petInfoLValue}>{moment(notice.birthDate).startOf('day').fromNow(true)}</p>
                        </li>
                        {notice.price !== null && notice.price !== '' &&
                            <li className={s.petInfoLItem}>
                                <p className={s.petInfoLType}>Sell:</p>
                                <p className={s.petInfoLValue}>{notice.price}</p>
                            </li>
                        }                        
                    </ul>
                    <div className={s.noticeButtonsThumb}>
                        <button className={s.noticeLearnMoreButton} onClick={handleClickOpen}>Learn more</button>
                        {user._id === notice?.owner?._id && 
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