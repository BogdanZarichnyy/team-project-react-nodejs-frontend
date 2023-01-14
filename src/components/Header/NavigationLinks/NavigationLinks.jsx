import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import s from './NavigationLinks.module.scss';

const NavigationLinks = ({ isMobile, closeMobileMenu }) => {
  const location = useLocation();

  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  const animateFromForUl = { y: '-100vh' };
  const animateExit = { y: '-100vh', duration: 2000 };

  return (
    <motion.ul
      initial={animateFromForUl}
      animate={animateTo}
      exit={animateExit}
      transition={{ duration: 0.4 }}
      className={s.nav_list}
    >
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.3 }}
        onClick={() => {
          isMobile && closeMobileMenu();
        }}
      >
        <NavLink to="/news" className={`${s.nav_item} `}>
          <span className={`${location.pathname === '/news' && s.active}`}>
            News
          </span>
        </NavLink>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.35 }}
        onClick={() => {
          isMobile && closeMobileMenu();
        }}
      >
        <NavLink
          to="/notices/sell"
          className={`${s.nav_item} ${
            (location.pathname === '/notices/sell' ||
              location.pathname === '/notices/lost-found' ||
              location.pathname === '/notices/for-free' ||
              location.pathname === '/notices/favorite' ||
              location.pathname === '/notices/own') &&
            s.active
          }`}
        >
          <span>Find pet</span>
        </NavLink>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.45 }}
        onClick={() => {
          isMobile && closeMobileMenu();
        }}
      >
        <NavLink
          to="/friends"
          className={`${s.nav_item} ${
            location.pathname === '/friends' && s.active
          }`}
        >
          <span>Our friends</span>
        </NavLink>
      </motion.li>
    </motion.ul>
  );
};

export default NavigationLinks;
