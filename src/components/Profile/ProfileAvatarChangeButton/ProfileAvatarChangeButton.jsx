import IconComponent from '../../IconComponent';
import s from './ProfileAvatarChangeButton.module.scss';

const ProfileAvatarChangeButton = ({ handleClickOpen }) => {
  return (
    <button className={s.avatarChangeButton} onClick={handleClickOpen}>
      <IconComponent iconname="i-cross-lg4" classname={s.avatarChangeIcon} />
      Edit photo
    </button>
  );
};

export default ProfileAvatarChangeButton;
