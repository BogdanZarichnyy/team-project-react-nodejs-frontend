import AuthGroupLinks from './AuthGroupLinks';

import style from './Header.module.scss';

const PhoneAuthGroup = ({ closeMobileMenu, onOpenMobileMenu }) => {
  return (
    <div className={style.PhoneAuth}>
      <AuthGroupLinks
        isMobile={true}
        closeMobileMenu={closeMobileMenu}
        onOpenMobileMenu={onOpenMobileMenu}
      />
    </div>
  );
};

export default PhoneAuthGroup;
