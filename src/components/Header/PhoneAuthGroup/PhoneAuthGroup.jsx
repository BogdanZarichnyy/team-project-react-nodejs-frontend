import AuthGroupLinks from '../AuthGroupLinks';

import style from '../Header.module.scss';

const PhoneAuthGroup = ({ closeMobileMenu }) => {
  return (
    <div className={style.PhoneAuth}>
      <AuthGroupLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
    </div>
  );
};

export default PhoneAuthGroup;
