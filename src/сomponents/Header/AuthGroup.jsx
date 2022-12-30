import React from 'react';
import AuthGroupLinks from './AuthGroupLinks';

import style from './Header.module.scss';

const AuthGroup = () => {
  return (
    <div className={style.Auth}>
      <AuthGroupLinks />
    </div>
  );
};

export default AuthGroup;
