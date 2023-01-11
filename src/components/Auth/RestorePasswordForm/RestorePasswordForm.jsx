import { useFormik } from 'formik';

import ErrorText from '../../ErrorText';
import InputBase from '../../InputBase/InputBase';
import ButtonBase from '../../ButtonBase/ButtonBase';

import s from '../Auth.module.scss';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { restorePasswordFetch } from '../../../store/user';
import { restorePasswordSchema } from '../../../validation/restorePasswordSchema';

const initialValues = {
  email: '',
};

const RestorePasswordForm = ({ onSent }) => {
  const dispatch = useDispatch();

  const handleMail = async values => {
    try {
      await dispatch(restorePasswordFetch(values));
      console.log('aaaaa');
      onSent();
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: restorePasswordSchema,
    validateOnMount: true,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: handleMail,
  });

  const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
    formik;

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      {touched.email && errors.email ? <ErrorText text={errors.email} /> : null}
      <InputBase
        styles={s.inputRestorePassword}
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <ButtonBase type="submit" text="Send new password" />
    </form>
  );
};

export default RestorePasswordForm;
