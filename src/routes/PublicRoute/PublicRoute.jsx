import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { Outlet, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getUserLoggedSelector } from '../../store/user';

const PublicRoute = () => {
  const navigate = useNavigate();
  const loginStatus = useSelector(getUserLoggedSelector);

  useEffect(() => {
    if (loginStatus === 'success') {
      toast.success('Welcome');
      navigate('/user');
    }
  }, [loginStatus, navigate]);

  return <div>{loginStatus === 'rejected' && <Outlet />}</div>;
};

export default PublicRoute;
