import sprite from '../../../images/sprite.svg';


import s from './AuthGroupLinks.module.scss';
import PrimaryButton from '../../Buttons/PrimaryButton';
import SecondaryButton from '../../Buttons/SecondaryButton';

const AuthGroupLinks = ({ isMobile, closeMobileMenu }) => {
  return (
    <>
      {'if authorized' && (
        <>
          <PrimaryButton
            tag="NavLink"
            to="/user"
            className={s.auth_item}
            className={s.authPrimaryBtn}
            onClick={() => {
              isMobile && closeMobileMenu();
            }}
          >
            <svg className={s.userIcon} width="28px" height="28px">
              <use href={sprite + '#userDefaultCircleIcon'} />
            </svg>
            Acсount
          </PrimaryButton>
        </>
      )}

      {'if NOT authorized' && (
        <>
          <PrimaryButton
            tag="NavLink"
            to="/login"
            className={s.auth_item}
            className={s.authPrimaryBtn}
            onClick={() => {
              isMobile && closeMobileMenu();
            }}
          >
            Login
          </PrimaryButton>

          <SecondaryButton
            tag="NavLink"
            to="/register"
            className={`${s.auth_item} ${s.auth_item__secondary}`}
            className={s.authPrimaryBtn}
            onClick={() => {
              isMobile && closeMobileMenu();
            }}
          >
            Registration
          </SecondaryButton>
        </>
      )}
    </>
  );
};

export default AuthGroupLinks;
