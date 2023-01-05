import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import s from '../LoginForm/LoginForm.module.scss';
import InputBase from '../../InputBase/InputBase';
import ButtonBase from '../../ButtonBase/ButtonBase';

import { loginUserFetch } from '../../../store/user';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid e-mail')
    .required('Required field to fill!'),
  password: Yup.string()
    .min(10, 'Password must be at least 10 characters long')
    .max(60, 'Password must be 60 characters maximum')
    .required('Required field to fill!'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => console.log(values),
  });

  const { values, handleChange, handleSubmit } = formik;

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    dispatch(loginUserFetch({ email, password }));
  };

  return (
    <form className={s.form} onSubmit={handleLogin}>
      <InputBase
        styles={s.inputBottomMargin}
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      <InputBase
        styles={s.inputSecondBottomMargin}
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
      />
      <ButtonBase type="submit" text="Login" />
    </form>
  );
};
export default LoginForm;
