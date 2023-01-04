import React from 'react';
import AuthGroupLinks from '../AuthGroupLinks';

import s from '../Header.module.scss';

const AuthGroup = () => {
  return (
    <div className={s.Auth}>
      <AuthGroupLinks />
    </div>
  );
};

export default AuthGroup;
