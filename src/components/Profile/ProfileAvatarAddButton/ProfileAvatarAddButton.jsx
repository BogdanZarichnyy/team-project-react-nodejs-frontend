import sprite from '../../../images/sprite.svg';
import s from './ProfileAvatarAddButton.module.scss';

const ProfileAvatarAddButton = ({ handleClickOpen }) => {
  return (
    <button className={s.avatarAddButton} onClick={handleClickOpen}>
      <svg className={s.avatarAddIcon}>
        <use id="i-cross-lg4" href={`${sprite}#i-cross-lg4`} />
      </svg>
    </button>
  );
};

export default ProfileAvatarAddButton;
