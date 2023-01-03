import { useState } from 'react';
import AuthLayout from '../../layouts/AuthLayout';
import RegisterFormStepOne from '../../components/Auth/RegisterFormStepOne';
import RegisterFormStepTwo from '../../components/Auth/RegisterFormStepTwo';

const RegisterPage = () => {
  const [step, setStep] = useState(1);

  return (
    <AuthLayout
      title="REGISTRATION"
      textDescription="Already have an account?"
      nawLink="/login"
      textNawLink="Login"
    >
      {step === 1 ? (
        <RegisterFormStepOne onNext={() => setStep(2)} />
      ) : (
        <RegisterFormStepTwo onNext={() => setStep(1)} />
      )}
    </AuthLayout>
  );
};

export default RegisterPage;
