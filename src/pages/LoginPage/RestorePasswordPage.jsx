import { useState } from 'react';
import RestorePasswordContainer from '../../components/Auth/RestorePasswordForm/RestorePasswordContainer';
import RestorePasswordForm from '../../components/Auth/RestorePasswordForm/RestorePasswordForm';
import AuthLayout from '../../layouts/AuthLayout';

const RestorePasswordPage = () => {
  const [isSent, setIsSent] = useState(false);

  return (
    <AuthLayout
      title="Restore password"
      textDescription="Don't have an account?"
      nawLink="/register"
      textNawLink=" Register"
    >
      {isSent === false ? (
        <RestorePasswordForm onSent={() => setIsSent(true)} />
      ) : (
        <RestorePasswordContainer onResend={() => setIsSent(false)} />
      )}
    </AuthLayout>
  );
};

export default RestorePasswordPage;
