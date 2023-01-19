import { useFormik } from 'formik';

import ErrorText from '../../ErrorText';
import InputBase from '../../InputBase/InputBase';
import ButtonBase from '../../ButtonBase/ButtonBase';

import s from '../Auth.module.scss';
import { useDispatch } from 'react-redux';
import { restorePasswordFetch } from '../../../store/user';
import { restorePasswordSchema } from '../../../validation/restorePasswordSchema';

const initialValues = {
  email: '',
};

const RestorePasswordForm = ({ onSent }) => {
  const dispatch = useDispatch();

  const handleMail = async values => {
    try {
      dispatch(restorePasswordFetch(values));
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
      <div className={s.input__container}>
        <InputBase
          styles={s.inputSecondBottomMargin}
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email ? (
          <ErrorText text={errors.email} />
        ) : null}
      </div>

      <ButtonBase type="submit" text="Send new password" />
    </form>
  );
};

export default RestorePasswordForm;
