import sprite from '../../../images/sprite.svg';
import s from './ProfileAvatarChangeButton.module.scss';

const ProfileAvatarChangeButton = ({ handleClickOpen }) => {
  return (
    <button className={s.avatarChangeButton} onClick={handleClickOpen}>
      <svg className={s.avatarChangeIcon}>
        <use id="i-cross-lg4" href={`${sprite}#cameraEditPhotoIcon`} />
      </svg>
      Edit photo
    </button>
  );
};

export default ProfileAvatarChangeButton;
