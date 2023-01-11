import { motion } from 'framer-motion';

import { useSelector } from 'react-redux';
import { getUserLoggedSelector } from '../../../store/user/userSelectors';

import PrimaryButton from '../../Buttons/PrimaryButton';
import SecondaryButton from '../../Buttons/SecondaryButton';

import sprite from '../../../images/sprite.svg';
import s from './AuthGroupLinks.module.scss';

const AuthGroupLinks = ({ isMobile, closeMobileMenu }) => {
  const isLoggedIn = useSelector(getUserLoggedSelector);

  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  const animateExit = { y: '-100vh', transition: { duration: 0.25 } };

  return (
    <>
      {isLoggedIn === 'success' && (
        <>
          <motion.div
            initial={animateFrom}
            animate={animateTo}
            exit={animateExit}
          >
            <PrimaryButton
              tag="NavLink"
              to="/user"
              padding="8px 28px"
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
          </motion.div>
        </>
      )}

      {isLoggedIn === 'rejected' && (
        <>
          <motion.div
            initial={animateFrom}
            animate={animateTo}
            exit={animateExit}
          >
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
          </motion.div>

          <motion.div
            initial={animateFrom}
            animate={animateTo}
            exit={animateExit}
          >
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
          </motion.div>
        </>
      )}
    </>
  );
};

export default AuthGroupLinks;
