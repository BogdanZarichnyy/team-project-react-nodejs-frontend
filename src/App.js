import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SharedLayout from './Components/SharedLayout/SharedLayout';

import LoginPage from './pages/LoginPage/LoginPage';

export const App = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/test" element={<Test />} /> */}

        <Route path="*" element={<span>Not Found</span>} />
      </Routes>
    </Suspense>
  );
};
