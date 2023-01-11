import { useState } from 'react';
import { useFormik } from 'formik';

import AuthLayout from '../../layouts/AuthLayout';
import RegisterFormStepOne from '../../components/Auth/RegisterFormStepOne';
import RegisterFormStepTwo from '../../components/Auth/RegisterFormStepTwo';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUserFetch, getUserLoggedSelector } from '../../store/user';

import s from '../../components/Auth/Auth.module.scss';
import { registerPageSchema } from '../../validation/registerPageSchema';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  city: '',
  phone: '',
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const isLoggedIn = useSelector(getUserLoggedSelector);

  const handleRegister = async values => {
    const phone = '+' + values.phone;
    const { confirmPassword, ...userData } = values;
    try {
      await dispatch(
        registerUserFetch({
          ...userData,
          phone,
        })
      );
      if (isLoggedIn === 'success') {
        navigate('/user');
      }
    } catch (error) {
      console.log(error);
    }
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
