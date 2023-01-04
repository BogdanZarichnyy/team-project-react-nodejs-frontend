import { NavLink } from 'react-router-dom';

import sprite from '../../../images/sprite.svg';

import s from './AuthGroupLinks.module.scss';

const AuthGroupLinks = ({ isMobile, closeMobileMenu }) => {
  return (
    <>
      {'if authorized' && (
        <>
          <NavLink
            to="/user"
            className={s.auth_item}
            onClick={() => {
              isMobile && closeMobileMenu();
            }}
          >
            <svg className={s.userIcon} width="28px" height="28px">
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
            className={s.auth_item}
            onClick={() => {
              isMobile && closeMobileMenu();
            }}
          >
            <span>Login</span>
          </NavLink>

          <NavLink
            to="/register"
            className={`${s.auth_item} ${s.auth_item__secondary}`}
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
