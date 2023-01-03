import React, { useState } from 'react';
import NavigationLinks from './NavigationLinks';

import PhoneAuthGroup from './PhoneAuthGroup';

import sprite from '../../images/sprite.svg';
import style from './Header.module.scss';

const MobileNavigation = ({ onOpenMobileMenu }) => {
  const [open, setOpen] = useState(false);
  const closeMobileMenu = () => setOpen(false);

  function lockScroll() {
    document.body.classList.toggle('NotScroll');
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: -40,
      behavior: 'smooth',
    });
  };

  return (
    <nav className={style.MobileNavigation}>
      <button
        type="button"
        className={style.burger}
        onClick={() => {
          scrollToTop();
          setOpen(!open);
          onOpenMobileMenu();
          lockScroll();
        }}
      >
        {open ? (
          <svg className={style.burgerIcon} width="40" height="40">
            <use href={sprite + '#crossIconCloseHomeModal'} />
          </svg>
        ) : (
          <svg className={style.burgerIcon} width="40" height="40">
            <use href={sprite + '#burgerMenuIcon'} />
          </svg>
        )}
      </button>

      {open && (
        <>
          <PhoneAuthGroup
            closeMobileMenu={closeMobileMenu}
            onOpenMobileMenu={onOpenMobileMenu}
          />
          <NavigationLinks
            isMobile={true}
            closeMobileMenu={closeMobileMenu}
            onOpenMobileMenu={onOpenMobileMenu}
          />
        </>
      )}
    </nav>
  );
};

export default MobileNavigation;
