import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams, useLocation } from 'react-router-dom';

import classNames from 'classnames';
import s from './SearchInput.module.scss';
import InputBase from '../InputBase/InputBase';
import sprite from '../../images/sprite.svg';
import { getNewsFetch } from '../../store/news';
import {
  getSellAdsFetch,
  getShareAdsFetch,
  getFoundAdsFetch,
  getFavoriteAdsFetch,
  getUserAdsFetch,
} from '../../store/ads';
import useDebounce from '../../helpers/useDebounce';

const SearchInput = ({ styles }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();
  const pathArr = location.pathname.split('/');
  const currentPath = pathArr[pathArr.length - 1];

  let action;

  switch (currentPath) {
    case 'sell':
      action = getSellAdsFetch;
      break;
    case 'for-free':
      action = getShareAdsFetch;
      break;
    case 'lost-found':
      action = getFoundAdsFetch;
      break;
    case 'favorite':
      action = getFavoriteAdsFetch;
      break;
    case 'own':
      action = getUserAdsFetch;
      break;
    default:
      action = getNewsFetch;
      break;
  }

  const handleChange = e => {
    const queryVal = e.target.value;
    setSearchParams(queryVal !== '' ? { query: queryVal } : {});
  };

  const debouncedQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    dispatch(action(debouncedQuery.toLowerCase()));
  }, [dispatch, debouncedQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(getNewsFetch(searchQuery.toLowerCase()));
  };

  return (
    <form className={classNames(s.form, styles)} onSubmit={handleSubmit}>
      <div className={s.formSearch}>
        <InputBase
          type="text"
          name="search"
          placeholder="Search"
          styles={s.inputSearch}
          value={searchQuery}
          onChange={handleChange}
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
