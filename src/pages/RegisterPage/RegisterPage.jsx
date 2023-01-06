import { useState } from 'react';
import { useFormik } from 'formik';

import * as Yup from 'yup';
import AuthLayout from '../../layouts/AuthLayout';
import RegisterFormStepOne from '../../components/Auth/RegisterFormStepOne';
import RegisterFormStepTwo from '../../components/Auth/RegisterFormStepTwo';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUserFetch } from '../../store/user';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  city: '',
  phone: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid e-mail')
    // .matches(
    //   /^[a-z0-9._]{1}[a-z0-9._-]+)+@[a-z0-9._-]+\.([a-z0-9._-]*[a-z0-9._]+)$/,
    //   'Is not in correct format'
    // )
    .min(10, 'Email must be at least 10 characters long')
    .max(63, 'Email must be 63 characters maximum')
    .required('Required field to fill!'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters long')
    .max(32, 'Password must be 32 characters maximum')
    .required('Required field to fill!'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required field to fill!'),
  name: Yup.string()
    .required('Required field to fill!')
    .matches(/^[a-zA-z ]+$/, 'In this field must be contain only letters'),
  city: Yup.string().required('Required field to fill!'),
  phone: Yup.string()
    .required('Required field to fill!')
    .min(12, 'Number must be 12 characters minimum'),
});

const RegisterPage = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const handleRegister = async values => {
    try {
      await dispatch(
        registerUserFetch({ ...values, phone: '+' + values.phone })
      );
      // navigate('/user');
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: handleRegister,
  });

  return (
    <AuthLayout
      title="REGISTRATION"
      textDescription="Already have an account?"
      nawLink="/login"
      textNawLink="Login"
    >
      {step === 1 ? (
        <RegisterFormStepOne formik={formik} onNext={() => setStep(2)} />
      ) : (
        <RegisterFormStepTwo formik={formik} onNext={() => setStep(1)} />
      )}
    </AuthLayout>
  );
};

export default RegisterPage;
