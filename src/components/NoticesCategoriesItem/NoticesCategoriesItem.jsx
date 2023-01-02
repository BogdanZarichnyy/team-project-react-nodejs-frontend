import { useState } from 'react';

import s from './NoticesCategoriesItem.module.scss';
import sprite from '../../images/sprite.svg';
import img from '../../images/about.png';

export default function NoticesCategoriesItem({isAddedByMe}) {
    const [addedToFavorite, setAddedToFavorite] = useState(false);
    const [isLogedIn, setisLoggedIn] = useState(false);

    const clickAddFavorite = (event) => {
        if (!isLogedIn) {
            alert('Please log in!')
            event.currentTarget.blur()
            return
        }

        setAddedToFavorite(!addedToFavorite);
        event.currentTarget.blur()
    }

    return (
        <>
            <li className={s.noticeItem}>
                <div className={s.noticeThumb}>
                    <img className={s.noticeImage} src={img} alt="Pet"/>
                    <p className={s.categoryType}>In good hands</p>
                    <div className={s.noticeFavoriteButtonThumb}>
                        <button className={s.noticeFavoriteButton} onClick={clickAddFavorite}>
                            {addedToFavorite ?
                                <svg className={s.removeFavoriteIcon}>
                                    <use id="trashIcon" href={`${sprite}#trashIcon`} ></use>
                                </svg>
                                :
                                <svg className={s.favoriteIcon}>
                                    <use id="favoriteIcon" href={`${sprite}#favoriteIcon`} ></use>
                                </svg>
                            }                            
                        </button>
                    </div>                    
                </div>
                <div className={s.noticeDecription}>
                    <h3 className={s.noticeTitle}>Сute dog looking for a home</h3>
                    <ul className={s.petInfoList}>
                        <li className={s.petInfoLItem}>
                            <p className={s.petInfoLType}>Breed: <span className={[s['petInfoLValue'], s['petInfoLValueBreed']].join(' ')}>Pomeranian</span></p>
                        </li>
                        <li className={s.petInfoLItem}>
                            <p className={s.petInfoLType}>Place: <span className={[s['petInfoLValue'], s['petInfoLValuePlace']].join(' ')}>Lviv</span></p>
                        </li>
                        <li className={s.petInfoLItem}>
                            <p className={s.petInfoLType}>Age: <span className={[s['petInfoLValue'], s['petInfoLValueAge']].join(' ')}>one year</span></p>
                        </li>
                    </ul>
                    <div className={isAddedByMe ? s.personalNoticeButtonsThumb : s.noticeButtonsThumb}>
                        <button className={s.noticeLearnMoreButton}>Learn more</button>
                        {isAddedByMe &&
                            <button className={s.noticeDeleteButton}>Delete
                                <svg className={s.trashIcon}>
                                    <use id="trashIcon" href={`${sprite}#trashIcon`} ></use>
                                </svg>
                            </button>
                        }                        
                    </div>                    
                </div>
            </li>
        </>
    )
    
}