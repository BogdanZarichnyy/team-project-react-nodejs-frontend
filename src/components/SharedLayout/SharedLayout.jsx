import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

import CookiesPopup from '../CookiesPopup';

import style from './SharedLayout.module.scss';

const SharedLayout = () => {
  const isSeenCookieBar = document.cookie
    .split('; ')
    .includes('cookieBarSeen=true');

  return (
    <div className={style.layoutContainer}>
      <motion.div
        className={style.outlets}
        initial={{ opacity: 0, transition: { duration: 0.25 } }}
        animate={{ opacity: 1, transition: { duration: 0.25 } }}
        exit={{ opacity: 0, transition: { duration: 0.25 } }}
      >
        <Outlet />
      </motion.div>

      {!isSeenCookieBar && <CookiesPopup />}
    </div>
  );
};

export default SharedLayout;
