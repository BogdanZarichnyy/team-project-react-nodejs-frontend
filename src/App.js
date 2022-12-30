import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from './Components/SharedLayout';

import './App.css';

import LoginPage from './pages/LoginPage/LoginPage';

export const App = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <Routes>

        <Route path="/" element={<SharedLayout />}>
          <Route path="login" element={<LoginPage />} />
        </Route>


        <Route path="*" element={<span>Not Found</span>} />
      </Routes>
    </Suspense>
  );
};
