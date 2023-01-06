import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getUserSelector } from '../../store/user';

const PublicRoute = () => {
  const userData = useSelector(getUserSelector);

  return <div>{userData._id ? <Navigate to={'/'} /> : <Outlet />}</div>;
};

export default PublicRoute;
