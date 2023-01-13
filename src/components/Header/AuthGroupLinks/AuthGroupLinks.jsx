import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useSelector } from 'react-redux';
import { getUserLoggedSelector } from '../../../store/user/userSelectors';

import PrimaryButton from '../../Buttons/PrimaryButton';
import SecondaryButton from '../../Buttons/SecondaryButton';

import sprite from '../../../images/sprite.svg';
import s from './AuthGroupLinks.module.scss';

const AuthGroupLinks = ({ isMobile, closeMobileMenu }) => {
  const [isPrimaryBtnSelected, setIsPrimaryBtnSelected] = useState(true);
  const [isSecondaryBtnSelected, setIsSecondaryBtnSelected] = useState(false);
  const isLoggedIn = useSelector(getUserLoggedSelector);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/login') {
      setIsPrimaryBtnSelected(true);
      setIsSecondaryBtnSelected(false);
    }

    if (location.pathname === '/register') {
      setIsSecondaryBtnSelected(true);
      setIsPrimaryBtnSelected(false);
    }
  }, [location]);

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
            <SecondaryButton
              tag="NavLink"
              to="/login"
              className={
                isPrimaryBtnSelected ? s.authPrimaryBtnSelected : s.authBtn
              }
              onClick={() => {
                isMobile && closeMobileMenu();
              }}
            >
              Login
            </SecondaryButton>
          </motion.div>

          <motion.div
            initial={animateFrom}
            animate={animateTo}
            exit={animateExit}
          >
            <SecondaryButton
              tag="NavLink"
              to="/register"
              className={
                isSecondaryBtnSelected ? s.authPrimaryBtnSelected : s.authBtn
              }
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
