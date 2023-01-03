import { NavLink } from 'react-router-dom';

import sprite from '../../../images/sprite.svg';
import style from '../Header.module.scss';

const AuthGroupLinks = ({ isMobile, closeMobileMenu }) => {
  return (
    <>
      {'if authorized' && (
        <>
          <NavLink
            to="/user"
            className={style.auth_item}
            onClick={() => {
              isMobile && closeMobileMenu();
            }}
          >
            <svg className={style.userIcon} width="28px" height="28px">
              <use href={sprite + '#userDefaultCircleIcon'} />
            </svg>
            Acсount
          </NavLink>
        </>
      )}

      {'if NOT authorized' && (
        <>
          <NavLink
            to="/login"
            className={style.auth_item}
            onClick={() => {
              isMobile && closeMobileMenu();
            }}
          >
            <span>Login</span>
          </NavLink>

          <NavLink
            to="/register"
            className={`${style.auth_item} ${style.auth_item__secondary}`}
            onClick={() => {
              isMobile && closeMobileMenu();
            }}
          >
            <span>Registration</span>
          </NavLink>
        </>
      )}
    </>
  );
};

export default AuthGroupLinks;
