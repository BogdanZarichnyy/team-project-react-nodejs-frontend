import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import PhoneInput from 'react-phone-number-input/input';
import { validateUser } from '../../../validation/profileFormsValidation';

import {
  updateUserFetch,
  getUserErrorSelector,
  getUserLoadingSelector,
} from '../../../store/user';
import IconComponent from '../../IconComponent';
import ProfileContactItemCity from '../ProfileContactItemCity';

import s from './ProfileContactsItem.module.scss';
const date = new Date().toJSON().slice(0, 10);

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
  const [ValidationError, setValidationError] = useState(null);
  const dispatch = useDispatch();
  const isError = useSelector(getUserErrorSelector);
  const isLoading = useSelector(getUserLoadingSelector);
  const isDisabled = activeContact !== name ? true : false;

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
  console.log(date);
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

  const handleSubmit = async e => {
    e.preventDefault();
    let errName;
    if (valKey === 'name') {
      try {
        await validateUser.name.validate(val);
        setValidationError(null);
      } catch (err) {
        setValidationError(err.message);
        errName = err.name;
      }
      if (errName === 'ValidationError') return;
    }
    if (valKey === 'email') {
      try {
        await validateUser.email.validate(val);
        setValidationError(null);
      } catch (err) {
        setValidationError(err.message);
        errName = err.name;
      }
      if (errName === 'ValidationError') return;
    }
    if (valKey === 'birthday') {
      try {
        await validateUser.date.validate(val);
        setValidationError(null);
      } catch (err) {
        setValidationError(err.message);
        errName = err.name;
      }
      if (errName === 'ValidationError') return;
    }
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
            disabled={isDisabled}
            maxLength={16}
          />
        ) : valKey === 'city' ? (
          <ProfileContactItemCity
            isDisabled={isDisabled}
            ref={ref}
            val={val}
            setVal={setVal}
          />
        ) : valKey === 'birthday' ? (
          <input
            type={type}
            id={`input-${type}`}
            className={s.contactInput}
            ref={ref}
            value={val}
            onChange={handleInput}
            disabled={isDisabled}
            min="1950-01-01"
            max={date}
          />
        ) : (
          <input
            type={type}
            id={`input-${type}`}
            className={s.contactInput}
            ref={ref}
            value={val}
            onChange={handleInput}
            disabled={isDisabled}
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
      <ReactTooltip
        anchorId={`input-${type}`}
        place="top"
        variant="warning"
        isOpen={ValidationError}
        content={ValidationError}
      />
    </li>
  );
};

export default ProfileContactsItem;
