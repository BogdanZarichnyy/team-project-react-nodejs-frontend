import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import AuthLayout from '../../layouts/AuthLayout';
import RegisterFormStepOne from '../../components/Auth/RegisterFormStepOne';
import RegisterFormStepTwo from '../../components/Auth/RegisterFormStepTwo';

import { registerUserFetch } from '../../store/user';

import {
  getUserLoggedSelector,
  getUserErrorSelector,
  getUserLoadingSelector,
} from '../../store/user';

import { registerPageSchema } from '../../validation/registerPageSchema';

import s from '../../components/Auth/Auth.module.scss';
import '../../components/Auth/RegisterFormStepTwo/RegisterForm.css';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  city: '',
  phone: '',
};

const RegisterPage = () => {
  const isLogin = useSelector(getUserLoggedSelector);
  const isError = useSelector(getUserErrorSelector);
  const isLoading = useSelector(getUserLoadingSelector);

  const dispatch = useDispatch();
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (
      (isLogin === 'rejected') &
      (isError !== false) &
      (isLoading === false)
    ) {
      toast.error('A user with such an email is already registered');
    }
  }, [isLogin, isError, isLoading]);

  const handleRegister = values => {
    const phone = '+' + values.phone;
    const { confirmPassword, ...userData } = values;
    dispatch(
      registerUserFetch({
        ...userData,
        phone,
      })
    );
  };

  const formik = useFormik({
    initialValues,
    validationSchema: registerPageSchema,
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: handleRegister,
  });

  return (
    <AuthLayout
      title="REGISTRATION"
      textDescription="Already have an account?"
      nawLink="/login"
      textNawLink="Login"
      pageType="register"
    >
      <form className={s.form} onSubmit={formik.handleSubmit}>
        {step === 1 ? (
          <RegisterFormStepOne formik={formik} onNext={() => setStep(2)} />
        ) : (
          <RegisterFormStepTwo formik={formik} onNext={() => setStep(1)} />
        )}
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
