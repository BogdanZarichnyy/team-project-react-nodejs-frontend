import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';

import { toggleFavoriteFetch } from '../../../store/ads';
import ModalNotice from '../ModalNotice';
import s from './NoticesCategoriesItem.module.scss';
import sprite from '../../../images/sprite.svg';
import img from '../../../images/about.png';
import { ModalContext } from '../../ModalRework';

export default function NoticesCategoriesItem({ isAddedByMe }) {
  const [addedToFavorite, setAddedToFavorite] = useState(false);
  const [isLogedIn, setisLoggedIn] = useState(true);
  const dispatch = useDispatch();

  const { handleModal } = useContext(ModalContext);

  const clickAddFavorite = event => {
    if (!isLogedIn) {
      alert('Please log in!');
      event.currentTarget.blur();
      return;
    }

    setAddedToFavorite(!addedToFavorite);
    event.currentTarget.blur();
  };

  const handleClickOpen = () => {
    handleModal(
      <ModalNotice
        onClick={clickAddFavorite}
        isAddedTofavorite={addedToFavorite}
      />
    );
  };

  const handleClickClose = () => {
    dispatch(toggleFavoriteFetch());
  };

  return (
    <>
      <li className={s.noticeItem}>
        <div className={s.noticeThumb}>
          <img className={s.noticeImage} src={img} alt="Pet" />
          <p className={s.categoryType}>In good hands</p>
          <div className={s.noticeFavoriteButtonThumb}>
            <button
              className={s.noticeFavoriteButton}
              onClick={clickAddFavorite}
            >
              {addedToFavorite ? (
                <svg className={s.removeFavoriteIcon}>
                  <use id="trashIcon" href={`${sprite}#trashIcon`}></use>
                </svg>
              ) : (
                <svg className={s.favoriteIcon}>
                  <use id="favoriteIcon" href={`${sprite}#favoriteIcon`}></use>
                </svg>
              )}
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
          <div
            className={
              isAddedByMe ? s.personalNoticeButtonsThumb : s.noticeButtonsThumb
            }
          >
            <button
              className={s.noticeLearnMoreButton}
              onClick={handleClickOpen}
            >
              Learn more
            </button>
            {isAddedByMe && (
              <button
                className={s.noticeDeleteButton}
                onClick={handleClickClose}
              >
                Delete
                <svg className={s.trashIcon}>
                  <use id="trashIcon" href={`${sprite}#trashIcon`}></use>
                </svg>
              </button>
            )}
          </div>
        </div>
      </li>
    </>
  );
}
