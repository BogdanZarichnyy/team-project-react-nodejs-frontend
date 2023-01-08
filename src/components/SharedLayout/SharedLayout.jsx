import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
// import { getUserLoadingSelector } from '../../store/user';
import { getUserFetch } from '../../store/user/userSlice';

import CookiesPopup from '../CookiesPopup';
import Header from '../Header';
import Loader from '../LoaderV1/Loader';

import style from './SharedLayout.module.scss';

const SharedLayout = () => {
  const dispatch = useDispatch();
  // const isDataLoading = useSelector(getUserLoadingSelector);
  // console.log('isDataLoading', isDataLoading);

  useEffect(() => {
    dispatch(getUserFetch());
  }, [dispatch]);

  const isSeenCookieBar = document.cookie
    .split('; ')
    .includes('cookieBarSeen=true');

  return (
    <div className={style.layoutContainer}>
      <div className={style.headerContainer}>
        <Header />
      </div>

      <div className={style.outlets}>{!false ? <Outlet /> : <Loader />}</div>

      {!isSeenCookieBar && <CookiesPopup />}
    </div>
  );
};

export default SharedLayout;
