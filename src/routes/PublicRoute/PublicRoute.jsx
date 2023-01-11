import React, { useEffect } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getUserLoggedSelector } from '../../store/user';

const PublicRoute = () => {
  const isLoggedIn = useSelector(getUserLoggedSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn === 'success') {
      navigate('/user');
    }
  }, [isLoggedIn, navigate]);

  return <div>{isLoggedIn === 'rejected' && <Outlet />}</div>;
};

export default PublicRoute;
