import sprite from '../../../images/sprite.svg';

import style from './AuthGroupLinks.module.scss';
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
            className={style.authPrimaryBtn}
            onClick={() => {
              isMobile && closeMobileMenu();
            }}
          >
            <svg className={style.userIcon} width="28px" height="28px">
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
            className={style.authPrimaryBtn}
            onClick={() => {
              isMobile && closeMobileMenu();
            }}
          >
            Login
          </PrimaryButton>

          <SecondaryButton
            tag="NavLink"
            to="/register"
            className={style.authPrimaryBtn}
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
