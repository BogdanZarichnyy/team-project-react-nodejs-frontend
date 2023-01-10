import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getUserLoadingSelector } from '../../store/user';

import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import AuthGroup from './AuthGroup';

import s from './Header.module.scss';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 1280px)').matches
  );

  const isDataLoading = useSelector(getUserLoadingSelector);

  useEffect(() => {
    window
      .matchMedia('(min-width: 1280px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  useEffect(() => {
    if (matches) {
      setOpen(false);
    }

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
    <section className={s.section + ' container'}>
      <NavLink
        to="/"
        onClick={() => {
          setOpen(false);
        }}
        className={s.logo}
      >
        pe<span className={s.logo_accent}>t</span>ly
      </NavLink>

      <div className={s.navGroup}>
        <Navigation />
        <MobileNavigation open={open} setOpen={setOpen} />
      </div>

      <div className={s.authGroup}>
        {(!open || matches) && !isDataLoading && <AuthGroup />}
      </div>
    </section>
  );
};

export default Header;
