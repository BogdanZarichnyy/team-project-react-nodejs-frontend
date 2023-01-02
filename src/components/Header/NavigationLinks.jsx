import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import style from './Header.module.scss';

const NavigationLinks = ({ isMobile, closeMobileMenu, onOpenMobileMenu }) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  const animateFromForUl = { opacity: 0, y: -200 };

  return (
    <motion.ul
      initial={animateFromForUl}
      animate={animateTo}
      className={style.nav_list}
    >
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => {
          isMobile && closeMobileMenu();
          isMobile && onOpenMobileMenu();
        }}
      >
        <NavLink to="/news" className={style.nav_item}>
          <span>News</span>
        </NavLink>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => {
          isMobile && closeMobileMenu();
          isMobile && onOpenMobileMenu();
        }}
      >
        <NavLink to="/notices" className={style.nav_item}>
          <span>Find pet</span>
        </NavLink>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => {
          isMobile && closeMobileMenu();
          isMobile && onOpenMobileMenu();
        }}
      >
        <NavLink to="/friends" className={style.nav_item}>
          <span>Our friends</span>
        </NavLink>
      </motion.li>
    </motion.ul>
  );
};

export default NavigationLinks;
