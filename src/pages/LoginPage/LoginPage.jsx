import AuthLayout from '../../layouts/AuthLayout';
import LoginForm from '../../components/Auth/LoginForm';

const LoginPage = () => {
  return (
    <AuthLayout
      title="Login"
      textDescription="Don't have an account?"
      nawLink="/register"
      textNawLink=" Register"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
