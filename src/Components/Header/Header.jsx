import React from 'react';
import { NavLink } from 'react-router-dom';

import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

import style from './Header.module.scss';

const Header = () => {
  return (
    <section className={style.section}>
      <span className={style.logo}>
        pe<span className={style.logo_accent}>t</span>ly
      </span>

      <div className={style.navGroup}>
        <Navigation />
        <MobileNavigation />
      </div>

      <div className={style.authGroup}>
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
    </section>
  );
};

export default Header;
