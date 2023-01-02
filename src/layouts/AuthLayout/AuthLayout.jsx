import { NavLink } from 'react-router-dom';
import s from '../../layouts/AuthLayout/AuthLayout.module.scss';

const AuthLayout = ({
  title,
  textDescription,
  textNawLink,
  nawLink,
  children,
}) => {
  return (
    <div className={s.layout}>
      <div className="container">
        <div className={s.containerForm}>
          <div className={s.card}>
            {title && <h1 className={s.title}>{title}</h1>}
            {children}
            <div className={s.blockLinkAuth}>
              <p className={s.descr}>{textDescription}</p>
              <NavLink className={s.link} to={nawLink}>
                {textNawLink}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
