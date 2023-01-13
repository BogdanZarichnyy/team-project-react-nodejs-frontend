import React from 'react';
import classNames from 'classnames';
import s from './ButtonBase.module.scss';

const ButtonBase = ({
  disabled = false,
  type,
  text,
  styles = {},
  isLigth = false,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        s.button,
        styles,
        isLigth && s.ligth,
        disabled && s.disabled
      )}
      type={type}
    >
      {text}
    </button>
  );
};

export default ButtonBase;
