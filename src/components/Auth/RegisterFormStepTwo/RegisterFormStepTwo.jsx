import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import s from '../LoginForm/LoginForm.module.scss';
import InputBase from '../../InputBase/InputBase';
import ButtonBase from '../../ButtonBase/ButtonBase';

const initialValues = {
  name: '',
  city: '',
  phone: '',
};

const validationSchema = Yup.object({
  name: Yup.string(),
  city: Yup.string(),
  phone: Yup.number(),
});

const RegisterFormStepTwo = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => console.log(values),
  });

  const { values, handleChange, handleSubmit } = formik;

  return (
    <form
      className={s.form}
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <InputBase
        styles={s.inputBottomMargin}
        type="name"
        name="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
      />
      <InputBase
        styles={s.inputBottomMargin}
        type="name"
        name="city"
        placeholder="City, region"
        value={values.city}
        onChange={handleChange}
      />
      <InputBase
        styles={s.inputSecondBottomMargin}
        type="phone"
        name="phone"
        placeholder="Mobile phone"
        value={values.phone}
        onChange={handleChange}
      />
      <ButtonBase type="submit" text="Register" />
    </form>
  );
};

export default RegisterFormStepTwo;
