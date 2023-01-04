import sprite from '../../../images/sprite.svg';

import s from './ProfilePet.module.scss';

const ProfilePet = ({ pet: { _id, photo, name, date, breed, comments } }) => {
  const handleDelete = () => {
    console.log(_id);
  };

  return (
    <li className={s.petItem}>
      <img src={photo} alt={breed} className={s.petIamge} />
      <div>
        <p className={s.petFeature}>
          Name: <span className={s.petFeatureDetail}>{name}</span>
        </p>
        <p className={s.petFeature}>
          Date of birth: <span className={s.petFeatureDetail}>{date}</span>
        </p>
        <p className={s.petFeature}>
          Breed: <span className={s.petFeatureDetail}>{breed}</span>
        </p>
        <p className={s.petFeature}>
          Comments: <span className={s.petFeatureDetail}>{comments}</span>
        </p>
      </div>
      <button className={s.petDeleteButton} onClick={handleDelete}>
        <svg className={s.petDeleteIcon}>
          <use id="trashIconGrey" href={`${sprite}#trashIconGrey`} />
        </svg>
      </button>
    </li>
  );
};

export default ProfilePet;
