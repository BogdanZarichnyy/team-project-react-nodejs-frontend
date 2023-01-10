import AuthGroupLinks from '../AuthGroupLinks';

import s from './PhoneAuthGroup.module.scss';

const PhoneAuthGroup = ({ closeMobileMenu }) => {
  return (
    <div className={s.PhoneAuth}>
      <AuthGroupLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
    </div>
  );
};

export default PhoneAuthGroup;
