import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';

import InputBase from '../../InputBase/InputBase';
import ButtonBase from '../../ButtonBase/ButtonBase';
import ErrorText from '../../ErrorText';

import { getUserLoadingSelector, loginUserFetch } from '../../../store/user';
import { loginFormSchema } from '../../../validation/loginFormSchema';

import style from '../../../layouts/AuthLayout/AuthLayout.module.scss';
import s from '../Auth.module.scss';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const isLoading = useSelector(getUserLoadingSelector);
  const dispatch = useDispatch();

  const handleLogin = values => {
    dispatch(loginUserFetch(values));
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

      <ButtonBase type="submit" text="Login" disabled={isLoading} />
    </form>
  );
};
export default LoginForm;
