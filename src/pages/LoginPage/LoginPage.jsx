import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import AuthLayout from '../../layouts/AuthLayout';
import LoginForm from '../../components/Auth/LoginForm';

import { getUserLoggedSelector, getUserErrorSelector, getUserLoadingSelector } from '../../store/user';

const LoginPage = () => {
  const isLogin = useSelector(getUserLoggedSelector);
  const isError = useSelector(getUserErrorSelector);
  const isLoading = useSelector(getUserLoadingSelector);

  useEffect(() => {
    if (isLogin === 'rejected' & isError !== false & isLoading === false) {
      toast.error('Email or password is wrong');
    }
  });

  return (
    <AuthLayout
      title="Login"
      textDescription="Don't have an account?"
      nawLink="/register"
      textNawLink=" Register"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
