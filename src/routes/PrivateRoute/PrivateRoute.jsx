import { Navigate, Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getUserSelector } from '../../store/user';

const PrivatRoute = () => {
  const userData = useSelector(getUserSelector);

  return <div>{userData._id ? <Outlet /> : <Navigate to={'/login'} />}</div>;
};

export default PrivatRoute;
