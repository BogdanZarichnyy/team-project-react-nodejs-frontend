import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getUserLoadingSelector } from '../../store/user';
import { motion } from 'framer-motion';

import CookiesPopup from '../CookiesPopup';
import Loader from '../LoaderV1/Loader';

import style from './SharedLayout.module.scss';

const SharedLayout = () => {
  const isDataLoading = useSelector(getUserLoadingSelector);

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
        {isDataLoading ? <Loader /> : <Outlet />}
      </motion.div>

      {!isSeenCookieBar && <CookiesPopup />}
    </div>
  );
};

export default SharedLayout;
