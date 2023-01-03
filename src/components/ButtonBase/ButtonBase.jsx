import React from 'react';
import classNames from 'classnames';
import s from './ButtonBase.module.scss';

const ButtonBase = ({ type, text, styles = {}, isLigth = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(s.button, styles, isLigth && s.ligth)}
      type={type}
    >
      {text}
    </button>
  );
};

export default ButtonBase;
