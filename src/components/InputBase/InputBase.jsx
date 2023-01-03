import React from 'react';
import classNames from 'classnames';
import s from './InputBase.module.scss';

const InputBase = ({
  type,
  name,
  value,
  styles = {},
  onChange,
  isLigth = false,
  placeholder,
}) => {
  return (
    <input
      className={classNames(s.input, styles, isLigth && s.ligth)}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default InputBase;
