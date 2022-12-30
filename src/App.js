import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from './сomponents/SharedLayout/SharedLayout';
import LoginPage from './pages/LoginPage/LoginPage';

import './App.css';

const OurFriendsPages = lazy(() =>
  import('./pages/OurFriendsPages/OurFriendsPages')
);
const NewsList = lazy(() => import('./pages/News/newsList'));

export const App = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/friends" element={<OurFriendsPages />} />
        <Route path="/news" element={<NewsList />} />

        <Route path="*" element={<span>Not Found</span>} />
      </Routes>
    </Suspense>
  );
};
