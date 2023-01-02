import React from 'react';
import s from './SearchInput.module.scss';
import InputBase from '../InputBase/InputBase';
import sprite from '../../images/sprite.svg';

const SearchInput = () => {
  return (
    <form className={s.form}>
      <div className={s.formSearch}>
        <InputBase
          type="text"
          name="search"
          placeholder="Search"
          styles={s.inputSearch}
        />
        <button type="submit" className={s.btnSearch}>
          <svg width="17" height="17">
            <use href={`${sprite}#searchIcon`}></use>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
