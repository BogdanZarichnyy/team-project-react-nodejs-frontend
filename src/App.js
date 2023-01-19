import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import {
  getUserFetch,
  setRejectedLoginStatus,
  getUserTokenSelector,
} from './store/user';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getUserTokenSelector);

  useEffect(() => {
    if (token) {
      dispatch(getUserFetch());
    } else {
      dispatch(setRejectedLoginStatus());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return <AnimatedRoutes />;
};
