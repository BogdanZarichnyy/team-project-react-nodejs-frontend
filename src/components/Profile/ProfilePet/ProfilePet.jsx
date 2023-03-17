import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePetFetch, getPetsLoadingSelector } from '../../../store/user';

import IconComponent from '../../IconComponent';

import s from './ProfilePet.module.scss';

const ProfilePet = ({
  pet: { _id, photo, name, birthDate, breed, comments },
}) => {
  const [toggleDelete, setToggleDelete] = useState(false);
  const dispatch = useDispatch();
  const isPetsLoading = useSelector(getPetsLoadingSelector);

  const handleDelete = () => {
    dispatch(deletePetFetch(_id));
  };

  const editPet = () => {
    console.log('edit');
  };

  return (
    <li className={s.petItem}>
      {photo.length > 0 ? (
        <img src={photo} alt={breed} className={s.petImage} />
      ) : (
        <div className={`${s.petImage} ${s.petPlaceholder}`}>No image</div>
      )}
      {/* <div>
        <p className={s.petFeature}>
          Name: <span className={s.petFeatureDetail}>{name}</span>
        </p>
        <p className={s.petFeature}>
          Date of birth:{' '}
          <span className={s.petFeatureDetail}>
            {birthDate.substring(0, 10)}
          </span>
        </p>
        <p className={s.petFeature}>
          Breed: <span className={s.petFeatureDetail}>{breed}</span>
        </p>
        <p className={s.petFeature}>
          Comments: <span className={s.petFeatureDetail}>{comments}</span>
        </p>
      </div> */}
      <form className={s.petForm}>
        <label className={s.petFeature}>
          Name:
          <input className={s.petFeatureDetail} val={name} />
        </label>
        <label className={s.petFeature}>
          Date of birth:
          <input
            className={s.petFeatureDetail}
            val={birthDate.substring(0, 10)}
          />
        </label>
        <label className={s.petFeature}>
          Breed:
          <input className={s.petFeatureDetail} val={breed} />
        </label>
        <label className={s.petFeature}>
          Comments:
          <input className={s.petFeatureDetail} val={comments} />
        </label>
      </form>

      {toggleDelete ? (
        <div className={s.deleteHandlerContainer}>
          <button
            className={s.petDeleteHandler}
            onClick={handleDelete}
            disabled={isPetsLoading}
          >
            <IconComponent
              iconname="checkedIcon"
              classname={`${s.petDeleteIcon} ${s.petDeleteIconAccent}`}
            />
          </button>
          <button
            className={s.petDeleteHandler}
            onClick={() => setToggleDelete(false)}
          >
            <IconComponent
              iconname="i-plusIcon5"
              classname={`${s.petDeleteIcon} ${s.petDeleteIconClose}`}
            />
          </button>
        </div>
      ) : (
        <div className={s.deleteHandlerContainer}>
          <button
            className={s.petDeleteHandler}
            onClick={() => console.log('edit')}
            disabled={isPetsLoading}
          >
            <IconComponent
              iconname="editPenIcon"
              classname={`${s.petDeleteIcon} ${s.petDeleteIconAccent}`}
            />
          </button>
          <button
            className={s.petDeleteHandler}
            onClick={() => setToggleDelete(true)}
          >
            <IconComponent
              iconname="trashIconGrey"
              classname={s.petDeleteIcon}
            />
          </button>
        </div>
      )}
    </li>
  );
};

export default ProfilePet;
