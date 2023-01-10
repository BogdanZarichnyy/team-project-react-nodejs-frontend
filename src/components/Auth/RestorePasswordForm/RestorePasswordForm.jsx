import { useFormik } from 'formik';
import * as Yup from 'yup';
import ErrorText from '../../ErrorText';
import InputBase from '../../InputBase/InputBase';
import ButtonBase from '../../ButtonBase/ButtonBase';

import s from '../Auth.module.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { restorePasswordFetch } from '../../../store/user';

const initialValues = {
  email: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid e-mail')
    .matches(
      /^([a-zA-Z0-9._]{1}[a-zA-Z0-9._-]+)+@[a-zA-Z0-9._-]+\.([a-zA-Z0-9._-]*[a-zA-Z0-9._]+)$/,
      'Is not in correct format'
    )
    .min(7, 'Email must be at least 7 characters long')
    .max(63, 'Email must be 63 characters maximum')
    .required('Required field to fill!'),
});

const RestorePasswordForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMail = async values => {
    try {
      await dispatch(restorePasswordFetch(values));
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
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
