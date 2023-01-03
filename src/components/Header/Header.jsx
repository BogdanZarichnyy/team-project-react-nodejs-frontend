import React, { useEffect, useState } from 'react';

import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

import AuthGroup from './AuthGroup';
import { NavLink } from 'react-router-dom';

import style from './Header.module.scss';

const Header = () => {
  const [open, setOpen] = useState(false);

  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 1280px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 1280px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  useEffect(() => {
    if (matches && open) {
      document.body.classList.remove('NotScroll');
    }
    if (!open) {
      document.body.classList.remove('NotScroll');
    }

    if (open && !matches) {
      document.body.classList.add('NotScroll');
    }
  }, [matches, open]);

  return (
    <section className={style.section + ' container'}>
      <NavLink
        to="/"
        onClick={() => {
          console.log('click on logo');
          setOpen(false);
        }}
      >
        <span className={style.logo}>
          pe<span className={style.logo_accent}>t</span>ly
        </span>
      </NavLink>

      <div className={style.navGroup}>
        <Navigation />
        <MobileNavigation open={open} setOpen={setOpen} />
      </div>

      <div className={style.authGroup}>
        {(!open || matches) && <AuthGroup />}
      </div>
    </section>
  );
};

export default Header;
