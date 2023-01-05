import { Outlet } from 'react-router-dom';
import CookiesPopup from '../CookiesPopup';

import Header from '../Header';

import style from './SharedLayout.module.scss';

const SharedLayout = () => {
  const isSeenCookieBar = document.cookie
    .split('; ')
    .includes('cookieBarSeen=true');

  return (
    <div className={style.layoutContainer}>
      <div className={style.headerContainer}>
        <Header />
      </div>

      <div className={style.outlets}>
        <Outlet />
      </div>

      {!isSeenCookieBar && <CookiesPopup />}
    </div>
  );
};

export default SharedLayout;
