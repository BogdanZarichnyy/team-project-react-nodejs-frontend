import NavigationLinks from './NavigationLinks';

import style from './Header.module.scss';

const Navigation = () => {
  return (
    <nav className={style.Navigation}>
      <NavigationLinks />
    </nav>
  );
};

export default Navigation;
