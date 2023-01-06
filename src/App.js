import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import SharedLayout from './components/SharedLayout/SharedLayout';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import Profile from './pages/Profile';
import RegisterPage from './pages/RegisterPage';

import './App.css';

const OurFriendsPages = lazy(() =>
  import('./pages/OurFriendsPages/OurFriendsPages')
);

const NoticesPage = lazy(() => import('./pages/NoticesPage'));

const NewsList = lazy(() => import('./pages/News/NewsList'));

export const App = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route element={<PublicRoute />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="user" element={<Profile />} />
          </Route>

          <Route path="friends" element={<OurFriendsPages />} />
          <Route path="news" element={<NewsList />} />
          <Route path="notices" element={<NoticesPage />} />
        </Route>

        <Route path="*" element={<span>Not Found</span>} />
      </Routes>
    </Suspense>
  );
};
