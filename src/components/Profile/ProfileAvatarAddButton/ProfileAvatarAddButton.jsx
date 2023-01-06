import IconComponent from '../../IconComponent';
import s from './ProfileAvatarAddButton.module.scss';

const ProfileAvatarAddButton = ({ handleClickOpen }) => {
  return (
    <button className={s.avatarAddButton} onClick={handleClickOpen}>
      <IconComponent classname={s.avatarAddIcon} iconname="i-cross-lg4" />
    </button>
  );
};

export default ProfileAvatarAddButton;
