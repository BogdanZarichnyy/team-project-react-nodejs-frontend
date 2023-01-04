import NavigationLinks from '../NavigationLinks';

import s from '../Header.module.scss';

const Navigation = () => {
  return (
    <nav className={s.Navigation}>
      <NavigationLinks />
    </nav>
  );
};

export default Navigation;
