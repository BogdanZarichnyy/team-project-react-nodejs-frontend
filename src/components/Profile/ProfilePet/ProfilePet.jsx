import { useDispatch } from 'react-redux';
import { deletePetFetch } from '../../../store/user';

import IconComponent from '../../IconComponent';

import s from './ProfilePet.module.scss';

const ProfilePet = ({
  pet: { _id, photo, name, birthDate, breed, comments },
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePetFetch(_id));
  };

  return (
    <li className={s.petItem}>
      {photo.length > 0 ? (
        <img src={photo} alt={breed} className={s.petImage} />
      ) : (
        <div className={`${s.petImage} ${s.petPlaceholder}`}>No image</div>
      )}

      <div>
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
      </div>
      <button className={s.petDeleteButton} onClick={handleDelete}>
        <IconComponent iconname="trashIconGrey" classname={s.petDeleteIcon} />
      </button>
    </li>
  );
};

export default ProfilePet;
