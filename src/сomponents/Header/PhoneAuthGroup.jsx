import AuthGroupLinks from './AuthGroupLinks';

import style from './Header.module.scss';

const PhoneAuthGroup = () => {
  return (
    <div className={style.PhoneAuth}>
      <AuthGroupLinks />
    </div>
  );
};

export default PhoneAuthGroup;
