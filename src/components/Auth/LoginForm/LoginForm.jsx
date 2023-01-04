import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import s from '../LoginForm/LoginForm.module.scss';
import InputBase from '../../InputBase/InputBase';
import ButtonBase from '../../ButtonBase/ButtonBase';

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
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => console.log(values),
  });

  const { values, handleChange, handleSubmit } = formik;

  return (
    <form className={s.form} onSubmit={handleSubmit}>
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
