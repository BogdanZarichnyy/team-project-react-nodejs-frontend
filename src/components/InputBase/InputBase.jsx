import React from 'react';
import classNames from 'classnames';
import s from './InputBase.module.scss';

const InputBase = ({
  type,
  name,
  value,
  styles = {},
  onChange,
  isBlack = false,
  placeholder,
}) => {
  return (
    <input
      className={classNames(s.input, styles, isBlack && s.black)}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default InputBase;
