import RestorePasswordForm from '../../components/Auth/RestorePasswordForm/RestorePasswordForm';
import AuthLayout from '../../layouts/AuthLayout';
const RestorePasswordPage = () => {
  return (
    <AuthLayout
      title="Restore password"
      textDescription="Don't have an account?"
      nawLink="/register"
      textNawLink=" Register"
    >
      <RestorePasswordForm />
    </AuthLayout>
  );
};

export default RestorePasswordPage;
