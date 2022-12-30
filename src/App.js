import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SharedLayout from './components/SharedLayout/SharedLayout';

const OurFriendsPages = lazy(() =>
  import('./pages/OurFriendsPages/OurFriendsPages')
);

export const App = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route path="/test" element={<Test />} /> */}
        </Route>
        <Route path="friends" element={<OurFriendsPages />} />

        <Route path="*" element={<span>Not Found</span>} />
      </Routes>
    </Suspense>
  );
};
