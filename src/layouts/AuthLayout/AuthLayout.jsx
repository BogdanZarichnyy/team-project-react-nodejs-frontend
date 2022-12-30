import s from '../../layouts/AuthLayout/AuthLayout.module.scss';

const AuthLayout = ({ children }) => {
  return (
    <div className={s.layout}>
      <div className="container">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
