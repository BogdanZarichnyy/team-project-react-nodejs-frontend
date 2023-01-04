import { NavLink } from 'react-router-dom';

import sprite from '../../../images/sprite.svg';

import style from './AuthGroupLinks.module.scss';
import PrimaryButton from '../../Buttons/PrimaryButton';

const AuthGroupLinks = ({ isMobile, closeMobileMenu }) => {
  return (
    <>
      {'if authorized' && (
        <>
          <PrimaryButton
            tag="NavLink"
            to="/user"
            className="authPrimaryBtn"
            padding="10px 28px"
            fontSize="16px"
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
            className="authPrimaryBtn"
            onClick={() => {
              isMobile && closeMobileMenu();
            }}
          >
            Login
          </PrimaryButton>

          <PrimaryButton
            tag="NavLink"
            to="/register"
            className="authPrimaryBtn"
            onClick={() => {
              isMobile && closeMobileMenu();
            }}
          >
            Registration
          </PrimaryButton>
        </>
      )}
    </>
  );
};

export default AuthGroupLinks;
