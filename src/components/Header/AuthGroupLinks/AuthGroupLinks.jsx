import sprite from '../../../images/sprite.svg';

import s from './AuthGroupLinks.module.scss';
import PrimaryButton from '../../Buttons/PrimaryButton';
import SecondaryButton from '../../Buttons/SecondaryButton';
import { useSelector } from 'react-redux';
import { getUserSelector } from '../../../store/user/userSelectors';

const AuthGroupLinks = ({ isMobile, closeMobileMenu }) => {
  const userData = useSelector(getUserSelector);

  return (
    <>
      {userData._id && (
        <>
          <PrimaryButton
            tag="NavLink"
            to="/user"
            className={s.authBtn}
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

      {!userData._id && (
        <>
          <PrimaryButton
            tag="NavLink"
            to="/login"
            className={s.authBtn}
            onClick={() => {
              isMobile && closeMobileMenu();
            }}
          >
            Login
          </PrimaryButton>

          <SecondaryButton
            tag="NavLink"
            to="/register"
            className={s.authBtn}
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
