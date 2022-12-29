import React, { useState } from 'react';
import NavigationLinks from './NavigationLinks';
import style from './Header.module.scss';

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={style.MobileNavigation}>
      <button
        type="button"
        className={style.burgerIcon}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? '❌' : '🍔'}
      </button>

      {open && (
        <NavigationLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
      )}
    </nav>
  );
};

export default MobileNavigation;
