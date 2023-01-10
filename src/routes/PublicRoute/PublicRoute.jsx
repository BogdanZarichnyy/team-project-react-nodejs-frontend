import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getUserLoggedSelector } from '../../store/user';

const PublicRoute = () => {
  const isLoggedIn = useSelector(getUserLoggedSelector);

  return <div>{isLoggedIn ? <Navigate to={'/'} /> : <Outlet />}</div>;
};

export default PublicRoute;
