import { useState } from 'react';
import { useFormik } from 'formik';

import * as Yup from 'yup';
import AuthLayout from '../../layouts/AuthLayout';
import RegisterFormStepOne from '../../components/Auth/RegisterFormStepOne';
import RegisterFormStepTwo from '../../components/Auth/RegisterFormStepTwo';

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
    .required('Required field to fill!'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters long')
    .max(32, 'Password must be 32 characters maximum')
    .required('Required field to fill!'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required field to fill!'),
  name: Yup.string().required('Required field to fill!'),
  city: Yup.string().required('Required field to fill!'),
  phone: Yup.string()
    .required('Required field to fill!')
    .min(13, 'Number must be 12 characters minimum'),
});

const RegisterPage = () => {
  const [step, setStep] = useState(1);

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: values => console.log(values),
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
