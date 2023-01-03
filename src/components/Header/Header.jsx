import React, { useEffect, useState } from 'react';

import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

import AuthGroup from './AuthGroup';
import { NavLink } from 'react-router-dom';

import style from './Header.module.scss';

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 1280px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 1280px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  useEffect(() => {
    if (matches && openMobileMenu) {
      // document.body.classList.toggle('NotScroll');
      document.body.classList.remove('NotScroll');
    }
    if (!openMobileMenu) {
      document.body.classList.remove('NotScroll');
    }

    if (openMobileMenu && !matches) {
      document.body.classList.add('NotScroll');
    }
  }, [matches, openMobileMenu]);

  const onOpenMobileMenu = () => setOpenMobileMenu(!openMobileMenu);

  return (
    <section className={style.section + ' container'}>
      <NavLink to="/">
        <span className={style.logo}>
          pe<span className={style.logo_accent}>t</span>ly
        </span>
      </NavLink>

      <div className={style.navGroup}>
        <Navigation />
        <MobileNavigation onOpenMobileMenu={onOpenMobileMenu} />
      </div>

      <div className={style.authGroup}>
        {(!openMobileMenu || matches) && <AuthGroup />}
      </div>
    </section>
  );
};

export default Header;
