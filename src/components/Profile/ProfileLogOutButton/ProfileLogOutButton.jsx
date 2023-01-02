import sprite from '../../../images/sprite.svg';
import s from './ProfileLogOutButton.module.scss';

const ProfileLogOutButton = () => {
  const handleLogOut = () => {
    console.log('logout');
  };

  return (
    <button className={s.logOutButton} onClick={handleLogOut}>
      <svg className={s.logOutIcon}>
        <use id="plus" href={`${sprite}#logoutUserIcon`} />
      </svg>
      Log Out
    </button>
  );
};

export default ProfileLogOutButton;
