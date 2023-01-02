import AuthLayout from '../../layouts/AuthLayout';
import LoginForm from '../../components/LoginForm/LoginForm';
import s from '../LoginPage/LoginPage.module.scss';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
  return (
    <AuthLayout>
      <div className={s.containerForm}>
        <div className={s.card}>
          <h1 className={s.title}>LOGIN</h1>
          <LoginForm />

          <div className={s.blockLinkAuth}>
            <p className={s.descr}>Already have an account?&nbsp;</p>
            <NavLink className={s.link} to="/registration">
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
