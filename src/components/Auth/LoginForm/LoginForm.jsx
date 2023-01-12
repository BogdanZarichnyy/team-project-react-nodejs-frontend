import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

import s from '../Auth.module.scss';
import InputBase from '../../InputBase/InputBase';
import ButtonBase from '../../ButtonBase/ButtonBase';
import ErrorText from '../../ErrorText';

import { loginUserFetch } from '../../../store/user';
import style from '../../../layouts/AuthLayout/AuthLayout.module.scss';
import { loginFormSchema } from '../../../validation/loginFormSchema';
import { getUserAuthSelector } from '../../../store/user/userSelectors';
import { isAuthFailure } from '../../../store/user/userSlice';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getUserAuthSelector);
  const options = {
    onClose: () => dispatch(isAuthFailure(null)),
  };

  useEffect(() => {
    if (isLoggedIn === false) {
      toast.error(`Incorrect email or password.`, options);
    }
    // eslint-disable-next-line
  }, [isLoggedIn]);

  const handleLogin = values => {
    try {
      dispatch(loginUserFetch(values));
    } catch (error) {
      console.log('error', error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginFormSchema,
    validateOnMount: true,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleLogin,
  });

  const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
    formik;

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      {touched.email && errors.email ? <ErrorText text={errors.email} /> : null}
      <InputBase
        styles={s.inputBottomMargin}
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.password && errors.password ? (
        <ErrorText text={errors.password} />
      ) : null}
      <InputBase
        styles={s.inputLogin}
        type="password"
        name="password"
        autocomplete="current-password"
        id="current-password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div className={s.blockLink}>
        <NavLink className={style.link} to="/restorePassword">
          Forgot password
        </NavLink>
      </div>

      <ButtonBase type="submit" text="Login" />
    </form>
  );
};
export default LoginForm;
