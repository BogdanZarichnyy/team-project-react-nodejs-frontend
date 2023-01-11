import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import PublicRoute from '../../routes/PublicRoute';
import PrivateRoute from '../../routes/PrivateRoute';

import SharedLayout from '../SharedLayout';
import Loader from '../LoaderV1';
import Home from '../../pages/Home';
import Header from '../Header';

import s from './AnimatedRoutes.module.scss';

const OurFriendsPages = lazy(() =>
  import('../../pages/OurFriendsPages/OurFriendsPages')
);
const NoticesPage = lazy(() => import('../../pages/NoticesPage'));
const NoticesCategoryList = lazy(() =>
  import('../Notices/NoticesCategoriesList')
);
const NewsList = lazy(() => import('../../pages/News/NewsList'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const Profile = lazy(() => import('../../pages/Profile'));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <div className={s.headerContainer}>
        <Header />
      </div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<Loader />}>
                  <Home />
                </Suspense>
              }
            />

            <Route
              element={
                <Suspense fallback={<Loader />}>
                  <PublicRoute />
                </Suspense>
              }
            >
              <Route
                path="login"
                element={
                  <Suspense fallback={<Loader />}>
                    <LoginPage />
                  </Suspense>
                }
              />
              <Route
                path="register"
                element={
                  <Suspense fallback={<Loader />}>
                    <RegisterPage />
                  </Suspense>
                }
              />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route
                path="user"
                element={
                  <Suspense fallback={<Loader />}>
                    <Profile />
                  </Suspense>
                }
              />
            </Route>

            <Route
              path="friends"
              element={
                <Suspense fallback={<Loader />}>
                  <OurFriendsPages />
                </Suspense>
              }
            />
            <Route
              path="news"
              element={
                <Suspense fallback={<Loader />}>
                  <NewsList />
                </Suspense>
              }
            />
            <Route
              path="notices"
              element={
                <Suspense fallback={<Loader />}>
                  <NoticesPage />
                </Suspense>
              }
            >
              <Route
                path="sell"
                element={<NoticesCategoryList categoryType={'sell'} />}
              />
              <Route
                path="lost-found"
                element={<NoticesCategoryList categoryType={'lost-found'} />}
              />
              <Route
                path="for-free"
                element={<NoticesCategoryList categoryType={'for-free'} />}
              />
              <Route element={<PrivateRoute />}>
                <Route
                  path="favorite"
                  element={<NoticesCategoryList categoryType={'favorite'} />}
                />
                <Route
                  path="own"
                  element={<NoticesCategoryList categoryType={'own'} />}
                />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<span>Not Found</span>} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
