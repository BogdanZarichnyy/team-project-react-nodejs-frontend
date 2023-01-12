import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';
import { toast } from "react-toastify";

import { getUserLoggedSelector, getUserSelector } from '../../../store/user';
import { toggleFavoriteFetch } from '../../../store/ads';

import ModalNotice from '../ModalNotice';
import IconComponent from '../../IconComponent';
import { ModalContext } from '../../ModalRework';
import defaultImage from '../../../images/defaultImage.png';

import s from './NoticesCategoriesItem.module.scss';

export default function NoticesCategoriesItem({ notice }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getUserLoggedSelector);
  const user = useSelector(getUserSelector);
  const { handleModal, modal, setModal } = useContext(ModalContext);

  const clickAddFavorite = (event) => {
    if (isLoggedIn !== 'success') {
      toast.warning(`This service is restricted to authorized users only.Please register or log in.`)
      event.currentTarget.blur()
      return
    }

    dispatch(toggleFavoriteFetch(notice._id));
    setModal(modal)
    event.currentTarget.blur();
  };

  const handleClickOpen = () => {
    handleModal(
      <ModalNotice onClick={clickAddFavorite} onClose={handleModal()} notice={notice} />,
      s.modalBody
    );
  };

  const handleDeleteNotice = () => {
    console.log('DELETE CLICKED');
  };

  return (
    <>
      <li className={s.noticeItem}>
        <div className={s.noticeThumb}>
          <img
            className={s.noticeImage}
            src={notice.photo === '' ? defaultImage : notice.photo}
            alt="Pet"
          />
          <p
            className={s.categoryType}>{
              (notice.category === 'sale' && 'Sell')
              || (notice.category === 'inGoodHands' && 'In good hands')
              || (notice.category === 'lostFound' && 'Lost/found')
            }
          </p>
          <div className={s.noticeFavoriteButtonThumb}>
            <button
              className={s.noticeFavoriteButton}
              onClick={clickAddFavorite}
            >
              <IconComponent
                classname={notice.isFavorite ? s.favoriteIconActive : s.favoriteIcon}
                iconname="favoriteIcon"
              />
            </button>
          </div>
        </div>
        <div
          className={
            user._id === notice?.owner?._id
              ? s.noticeDecriptionOwner
              : s.noticeDecription
          }
        >
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
              <p className={s.petInfoLValue}>
                {notice.birthDate &&
                  moment(notice.birthDate).startOf('day').fromNow(true)}
              </p>
            </li>
            {notice.price !== null && notice.price !== '' && (
              <li className={s.petInfoLItem}>
                <p className={s.petInfoLType}>Sell:</p>
                <p className={s.petInfoLValue}>{notice.price}</p>
              </li>
            )}
          </ul>
          <div className={s.noticeButtonsThumb}>
            <button
              className={s.noticeLearnMoreButton}
              onClick={handleClickOpen}
            >
              Learn more
            </button>
            {user._id === notice?.owner?._id && (
              <button
                className={s.noticeDeleteButton}
                onClick={handleDeleteNotice}
              >
                Delete
                <IconComponent classname={s.trashIcon} iconname="trashIcon" />
              </button>
            )}
          </div>
        </div>
      </li>
    </>
  );
}
