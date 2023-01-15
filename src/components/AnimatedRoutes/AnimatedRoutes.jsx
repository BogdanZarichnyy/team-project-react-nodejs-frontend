import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';

import PublicRoute from '../../routes/PublicRoute';
import PrivateRoute from '../../routes/PrivateRoute';

import ErrorBoundary from '../ErrorBoundary';
import SharedLayout from '../SharedLayout';
import Loader from '../LoaderV1';
import Home from '../../pages/Home';
import Header from '../Header';

import s from './AnimatedRoutes.module.scss';
import 'react-toastify/dist/ReactToastify.css';

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
const RestorePasswordPage = lazy(() =>
  import('../../pages/LoginPage/RestorePasswordPage')
);
const NotFound = lazy(() => import('../NotFound/NotFound'));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <div className={s.headerContainer}>
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
      </div>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<Loader />}>
                  <ErrorBoundary>
                    <Home />
                  </ErrorBoundary>
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
                    <ErrorBoundary>
                      <LoginPage />
                    </ErrorBoundary>
                  </Suspense>
                }
              />
              <Route
                path="register"
                element={
                  <Suspense fallback={<Loader />}>
                    <ErrorBoundary>
                      <RegisterPage />
                    </ErrorBoundary>
                  </Suspense>
                }
              />
              <Route
                path="restorePassword"
                element={
                  <Suspense>
                    <ErrorBoundary>
                      <RestorePasswordPage />
                    </ErrorBoundary>
                  </Suspense>
                }
              />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route
                path="user"
                element={
                  <Suspense fallback={<Loader />}>
                    <ErrorBoundary>
                      <Profile />
                    </ErrorBoundary>
                  </Suspense>
                }
              />
            </Route>

            <Route
              path="friends"
              element={
                <Suspense fallback={<Loader />}>
                  <ErrorBoundary>
                    <OurFriendsPages />
                  </ErrorBoundary>
                </Suspense>
              }
            />
            <Route
              path="news"
              element={
                <Suspense fallback={<Loader />}>
                  <ErrorBoundary>
                    <NewsList />
                  </ErrorBoundary>
                </Suspense>
              }
            />
            <Route
              path="notices"
              element={
                <Suspense fallback={<Loader />}>
                  <ErrorBoundary>
                    <NoticesPage />
                  </ErrorBoundary>
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

          <Route
            path="*"
            element={
              <Suspense fallback={<Loader />}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
      <ToastContainer autoClose={3000} theme="colored" />
    </>
  );
};

export default AnimatedRoutes;
