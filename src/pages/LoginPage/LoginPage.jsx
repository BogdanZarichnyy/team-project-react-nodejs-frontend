import AuthLayout from '../../layouts/AuthLayout';
import LoginForm from '../../сomponents/Auth/LoginForm';

const LoginPage = () => {
  return (
    <AuthLayout
      title="LOGIN"
      textDescription="Don't have an account?"
      nawLink="/register"
      textNawLink=" Register"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
