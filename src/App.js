import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from './components/SharedLayout/SharedLayout';
import LoginPage from './pages/LoginPage/LoginPage';

import './App.css';

const OurFriendsPages = lazy(() =>
  import('./pages/OurFriendsPages/OurFriendsPages')
);
const NewsList = lazy(() => import('./pages/News/NewsList'));

export const App = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/friends" element={<OurFriendsPages />} />
          <Route path="/news" element={<NewsList />} />
        </Route>

        <Route path="*" element={<span>Not Found</span>} />
      </Routes>
    </Suspense>
  );
};
