import React, { useEffect } from 'react';

import { Navigate, Outlet, redirect, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getUserLoggedSelector } from '../../store/user';

const PublicRoute = () => {
  const isLoggedIn = useSelector(getUserLoggedSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicRoute;
