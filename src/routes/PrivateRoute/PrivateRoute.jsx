import { Navigate, Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getUserLoggedSelector } from '../../store/user';

const PrivatRoute = () => {
  const isLoggedIn = useSelector(getUserLoggedSelector);

  return <div>{isLoggedIn ? <Outlet /> : <Navigate to={'/login'} />}</div>;
};

export default PrivatRoute;
