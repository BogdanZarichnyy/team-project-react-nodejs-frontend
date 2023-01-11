import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import { getUserFetch } from './store/user';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserFetch());
  }, [dispatch]);

  return <AnimatedRoutes />;
};
