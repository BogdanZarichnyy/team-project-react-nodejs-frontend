import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

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
const NoticesCategoryList = lazy(() => import('../src/components/Notices/NoticesCategoriesList'))

const NewsList = lazy(() => import('./pages/News/NewsList'));

export const App = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="friends" element={<OurFriendsPages />} />
          <Route path="news" element={<NewsList />} />
          <Route path="notices" element={<NoticesPage />} >
            <Route path="sell" index element={<NoticesCategoryList />} />
            <Route path="lost-found" element={<NoticesCategoryList />} />
            <Route path="for-free" element={<NoticesCategoryList />} />
            <Route path="favorite" element={<NoticesCategoryList />} />
            <Route path="own" element={<NoticesCategoryList />} />
          </Route >
          <Route path="user" element={<Profile />} />
        </Route>

        <Route path="*" element={<span>Not Found</span>} />
      </Routes>
    </Suspense>
  );
};
