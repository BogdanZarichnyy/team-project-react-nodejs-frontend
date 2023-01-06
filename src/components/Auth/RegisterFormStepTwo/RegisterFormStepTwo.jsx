import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import InputBase from '../../InputBase/InputBase';
import ButtonBase from '../../ButtonBase/ButtonBase';
import ErrorText from '../../ErrorText';

import s from '../Auth.module.scss';

const RegisterFormStepTwo = ({ onNext, formik }) => {
  const { values, handleChange, errors, touched, setFieldValue } = formik;
  return (
    <>
      {touched.name && errors.name ? <ErrorText text={errors.name} /> : null}
      <InputBase
        styles={s.inputBottomMargin}
        type="name"
        name="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
      />
      {touched.city && errors.city ? <ErrorText text={errors.city} /> : null}
      <InputBase
        styles={s.inputBottomMargin}
        type="name"
        name="city"
        placeholder="City, region"
        value={values.city}
        onChange={handleChange}
      />
      {touched.phone && errors.phone ? <ErrorText text={errors.phone} /> : null}

      <PhoneInput
        placeholder="Mobile phone"
        name="phone"
        country={'ua'}
        enableAreaCodes={true}
        value={values.phone}
        onChange={value => setFieldValue('phone', value, true)}
      />

      <ButtonBase type="submit" text="Register" />
      <ButtonBase onClick={onNext} type="button" text="Back" isLigth />
    </>
  );
};

export default RegisterFormStepTwo;
