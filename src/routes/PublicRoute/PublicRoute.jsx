import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Outlet, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getUserLoggedSelector } from '../../store/user';

const PublicRoute = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getUserLoggedSelector);

  useEffect(() => {
    if (isLoggedIn === 'success') {
      toast.success('Welcome');
      navigate('/user');
    }
  }, [isLoggedIn, navigate]);

  return <div>{isLoggedIn === 'rejected' && <Outlet />}</div>;
};

export default PublicRoute;
