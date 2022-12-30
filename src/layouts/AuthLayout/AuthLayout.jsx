// import Header from '../../Components/Headertest/Header';
import Header from '../../Components/Header/Header';
import s from '../../layouts/AuthLayout/AuthLayout.module.scss';

const AuthLayout = ({ children }) => {
  return (
    <div className={s.layout}>
      <div className="container">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
