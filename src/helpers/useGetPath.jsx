import { useLocation } from 'react-router-dom';

export const useGetPath = () => {
  const location = useLocation();
  const pathArr = location.pathname.split('/');
  return pathArr[pathArr.length - 1];
};
