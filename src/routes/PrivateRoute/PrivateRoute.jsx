import { Outlet, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getUserLoggedSelector } from '../../store/user';
import { useEffect } from 'react';

const PrivatRoute = () => {
  const loginStatus = useSelector(getUserLoggedSelector);
  const navigate = useNavigate();
  useEffect(() => {
    if (loginStatus === 'rejected') {
      navigate('/login');
    }
  }, [loginStatus, navigate]);

  return <div>{loginStatus === 'success' && <Outlet />}</div>;
};

export default PrivatRoute;
