import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import classNames from 'classnames';
import s from './SearchInput.module.scss';
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
import { useGetPath } from '../../helpers/useGetPath';

const SearchInput = ({ styles }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const currentPath = useGetPath();

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
        <input
          type="text"
          name="search"
          placeholder="Search"
          className={s.inputSearch}
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
