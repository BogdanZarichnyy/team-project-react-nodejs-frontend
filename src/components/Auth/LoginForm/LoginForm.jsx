import React from 'react';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import s from '../Auth.module.scss';
import InputBase from '../../InputBase/InputBase';
import ButtonBase from '../../ButtonBase/ButtonBase';
import ErrorText from '../../ErrorText';

import { loginUserFetch } from '../../../store/user';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid e-mail')
    // .matches(
    //   /^[a-z0-9._]{1}[a-z0-9._-]+)+@[a-z0-9._-]+\.([a-z0-9._-]*[a-z0-9._]+)$/,
    //   'Is not in correct format'
    // )
    .min(10, 'Email must be at least 10 characters long')
    .max(63, 'Email must be 63 characters maximum')
    .required('Required field to fill!'),
  password: Yup.string()
    .min(7, 'Password must be at least 10 characters long')
    .max(32, 'Password must be 60 characters maximum')
    .required('Required field to fill!'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: values => console.log(values),
  });

  const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
    formik;

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    dispatch(loginUserFetch({ email, password }));
  };

  // console.log(touched);
  // console.log(errors);

  return (
    <form className={s.form} onSubmit={handleLogin}>
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
        styles={s.inputSecondBottomMargin}
        type="password"
        name="password"
        autocomplete="current-password"
        id="current-password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <ButtonBase type="submit" text="Login" />
    </form>
  );
};
export default LoginForm;
