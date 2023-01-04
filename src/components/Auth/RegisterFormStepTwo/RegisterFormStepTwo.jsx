import React from 'react';
import 'react-phone-number-input/style.css';

import s from '../Auth.module.scss';
// import s from '../RegisterFormStepTwo/RegisterFormStepTwo.module.scss';
import InputBase from '../../InputBase/InputBase';
import ButtonBase from '../../ButtonBase/ButtonBase';
import ErrorText from '../../ErrorText';
import PhoneInput from 'react-phone-number-input';
// import flags from 'react-phone-number-input/flags';

const RegisterFormStepTwo = ({ onNext, formik }) => {
  const { values, handleChange, handleSubmit, errors, touched, setFieldValue } =
    formik;
  console.log(values.phone.length);
  return (
    <form
      className={s.form}
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
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
      {/* <InputBase
        styles={s.inputSecondBottomMargin}
        type="phone"
        name="phone"
        placeholder="Mobile phone"
        value={values.phone}
        onChange={handleChange}
      /> */}
      <PhoneInput
        // className={s.inputPhone}
        placeholder="Mobile phone"
        name="phone"
        international
        defaultCountry="UA"
        value={values.phone}
        onChange={value => setFieldValue('phone', value, true)}
        // containerStyle={{
        //   border: '10px solid black',
        // }}
        // inputStyle={{
        //   background: 'lightblue',
        // }}
        // style={{ border: 'none', background: 'content-box' }}
      />
      <ButtonBase type="submit" text="Register" />
      <ButtonBase onClick={onNext} type="button" text="Back" isLigth />
    </form>
  );
};

export default RegisterFormStepTwo;
