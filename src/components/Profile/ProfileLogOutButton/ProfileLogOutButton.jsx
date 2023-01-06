import { useDispatch } from 'react-redux';
import { logOutUserFetch } from '../../../store/user/userSlice';
import IconComponent from '../../IconComponent';
import s from './ProfileLogOutButton.module.scss';

const ProfileLogOutButton = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUserFetch());
  };

  return (
    <button className={s.logOutButton} onClick={handleLogOut}>
      <IconComponent iconname="logoutUserIcon" classname={s.logOutIcon} />
      Log Out
    </button>
  );
};

export default ProfileLogOutButton;
