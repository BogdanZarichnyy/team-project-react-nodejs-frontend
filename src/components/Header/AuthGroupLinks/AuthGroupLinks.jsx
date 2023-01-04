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
            padding="10px 28px"
            fontSize="16px"
            onClick={() => {
              isMobile && closeMobileMenu();
            }}
          >
            Login
          </PrimaryButton>

          <PrimaryButton
            tag="button"
            type="submit"
            className={style.authPrimaryBtn}
            padding="10.5px 30%"
            fontSize="20px"
            onClick={e => console.log(e)}
          >
            Next
          </PrimaryButton>

          <SecondaryButton
            tag="a"
            href="/"
            color="#4fdb2f"
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
