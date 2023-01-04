import React, { useState } from 'react'; // , { useEffect }
import s from '../Auth.module.scss';
import InputBase from '../../InputBase/InputBase';
import ButtonBase from '../../ButtonBase/ButtonBase';
import ErrorText from '../../ErrorText';

const RegisterFormStepOne = ({ onNext, formik }) => {
  const [isErrors, setIsErrors] = useState(false);

  const { values, handleChange, handleSubmit, errors } = formik;

  const validateFields = () => {
    if (errors.email || errors.password || errors.confirmPassword) {
      setIsErrors(true);
    } else {
      onNext();
    }
  };

  console.log(errors);
  return (
    <form
      className={s.form}
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {isErrors && errors.email && <ErrorText text={errors.email} />}
      <InputBase
        styles={s.inputBottomMargin}
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      {isErrors && errors.password && <ErrorText text={errors.password} />}
      <InputBase
        styles={s.inputBottomMargin}
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
        autocomplete="new-password"
        id="new-password"
      />
      {isErrors && errors.confirmPassword && (
        <ErrorText text={errors.confirmPassword} />
      )}
      <InputBase
        styles={s.inputSecondBottomMargin}
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={values.confirmPassword}
        onChange={handleChange}
        autocomplete="new-password"
        id="new-password"
      />

      <ButtonBase onClick={validateFields} type="button" text="Next" />
    </form>
  );
};

export default RegisterFormStepOne;
