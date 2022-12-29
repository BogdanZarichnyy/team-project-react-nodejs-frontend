import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Header.module.css';

const Header = () => {
  return (
    <nav className={style.container}>
      <div className={style.navGroupe}>
        <span className={style.logo}>
          pe<span className={style.logo_accent}>t</span>ly
        </span>

        <NavLink to="/news" className={style.nav_item}>
          <span>News</span>
        </NavLink>

        <NavLink to="/notices" className={style.nav_item}>
          <span>Find pet</span>
        </NavLink>

        <NavLink to="/friends" className={style.nav_item}>
          <span>Our friends</span>
        </NavLink>
      </div>

      <div className={style.authGroupe}>
        {'if authorized' && (
          <>
            <NavLink to="/user" className={style.auth_item}>
              Acсount
            </NavLink>
          </>
        )}

        {'if NOT authorized' && (
          <>
            <NavLink to="/login" className={style.auth_item}>
              <span>Login</span>
            </NavLink>

            <NavLink
              to="/register"
              className={`${style.auth_item} ${style.auth_item__secondary}`}
            >
              <span>Registration</span>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
