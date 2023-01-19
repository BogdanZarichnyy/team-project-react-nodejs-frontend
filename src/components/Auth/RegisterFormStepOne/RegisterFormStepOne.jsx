import React, { useState } from 'react';
import InputBase from '../../InputBase/InputBase';
import ButtonBase from '../../ButtonBase/ButtonBase';
import ErrorText from '../../ErrorText';

import s from '../Auth.module.scss';

const RegisterFormStepOne = ({ onNext, formik }) => {
  const [isErrors, setIsErrors] = useState(false);

  const { values, handleChange, errors } = formik;

  const validateFields = () => {
    if (errors.email || errors.password || errors.confirmPassword) {
      setIsErrors(true);
    } else {
      onNext();
    }
  };

  return (
    <>
      <div className={s.input__container}>
        <InputBase
          styles={s.inputBottomMargin}
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        {isErrors && errors.email && <ErrorText text={errors.email} />}
      </div>

      {isErrors && errors.password && <ErrorText text={errors.password} />}
      <div className={s.input__container}>
        <InputBase
          styles={s.inputBottomMargin}
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          autocomplete="new-password"
        />
        {isErrors && errors.password && <ErrorText text={errors.password} />}
      </div>

      <div className={s.input__container}>
        <InputBase
          styles={s.inputSecondBottomMargin}
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
          autocomplete="new-password"
        />
        {isErrors && errors.confirmPassword && (
          <ErrorText text={errors.confirmPassword} />
        )}
      </div>

      <ButtonBase onClick={validateFields} type="button" text="Next" />
    </>
  );
};

export default RegisterFormStepOne;
