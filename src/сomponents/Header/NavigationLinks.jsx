import { NavLink } from 'react-router-dom';

import style from './Header.module.scss';

const NavigationLinks = ({ isMobile, closeMobileMenu, onOpenMobileMenu }) => {
  return (
    <ul className={style.nav_list}>
      <li
        onClick={() => {
          isMobile && closeMobileMenu();
          isMobile && onOpenMobileMenu();
        }}
      >
        <NavLink to="/news" className={style.nav_item}>
          <span>News</span>
        </NavLink>
      </li>

      <li
        onClick={() => {
          isMobile && closeMobileMenu();
          isMobile && onOpenMobileMenu();
        }}
      >
        <NavLink to="/notices" className={style.nav_item}>
          <span>Find pet</span>
        </NavLink>
      </li>

      <li
        onClick={() => {
          isMobile && closeMobileMenu();
          isMobile && onOpenMobileMenu();
        }}
      >
        <NavLink to="/friends" className={style.nav_item}>
          <span>Our friends</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationLinks;
