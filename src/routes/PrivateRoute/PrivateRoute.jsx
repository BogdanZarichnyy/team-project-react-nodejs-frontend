import { Outlet, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getUserLoggedSelector } from '../../store/user';
import { useEffect } from 'react';

const PrivatRoute = () => {
  const isLoggedIn = useSelector(getUserLoggedSelector);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn === 'rejected') {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return <div>{isLoggedIn === 'success' && <Outlet />}</div>;
};

export default PrivatRoute;
