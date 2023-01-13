import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PhoneInput from 'react-phone-number-input/input';

import {
  updateUserFetch,
  getUserErrorSelector,
  getUserLoadingSelector,
} from '../../../store/user';
import IconComponent from '../../IconComponent';

import s from './ProfileContactsItem.module.scss';

const ProfileContactsItem = ({
  name,
  type,
  value,
  valKey,
  activeContact,
  setActiveContact,
}) => {
  const ref = useRef();
  const [val, setVal] = useState('');
  const dispatch = useDispatch();
  const isError = useSelector(getUserErrorSelector);
  const isLoading = useSelector(getUserLoadingSelector);

  useEffect(() => {
    if (isError && !isLoading) {
      /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(value)
        ? setVal(value.substring(0, 10))
        : setVal(value);
    }
  }, [isError, isLoading]);

  useEffect(() => {
    if (value) {
      /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(value)
        ? setVal(value.substring(0, 10))
        : setVal(value);
    }
  }, [value]);

  useEffect(() => {
    ref.current.focus();
  }, [activeContact]);

  const handleInput = e => {
    const inputVal = e.target.value;
    if (valKey !== 'phone') {
      setVal(inputVal);
    }
  };

  const handleClick = e => {
    e.preventDefault();
    setActiveContact(name);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateUserFetch({ [valKey]: val }));
    setActiveContact(null);
  };

  return (
    <li className={s.contactThumb}>
      <p className={s.contactType}>{name}</p>
      <form onSubmit={handleSubmit} className={s.contactForm}>
        {valKey === 'phone' ? (
          <PhoneInput
            className={s.contactInput}
            country="UA"
            international={true}
            withCountryCallingCode={true}
            ref={ref}
            value={val}
            onChange={setVal}
            disabled={activeContact !== name ? true : false}
            maxLength={16}
          />
        ) : (
          <input
            type={type}
            className={s.contactInput}
            ref={ref}
            value={val}
            onChange={handleInput}
            disabled={activeContact !== name ? true : false}
          />
        )}

        {activeContact === name ? (
          <button className={s.contactButton} type="submit">
            <IconComponent
              iconname="checkedIcon"
              classname={s.contactPenIcon}
            />
          </button>
        ) : (
          <button
            className={s.contactButton}
            type="button"
            onClick={handleClick}
            disabled={activeContact !== name && activeContact ? true : false}
          >
            <IconComponent
              iconname="editPenIcon"
              classname={s.contactPenIcon}
            />
          </button>
        )}
      </form>
    </li>
  );
};

export default ProfileContactsItem;
