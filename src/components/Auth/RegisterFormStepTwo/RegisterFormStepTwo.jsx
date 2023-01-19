import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import citiesArray from '../../../constants/citiesArray';

import InputBase from '../../InputBase/InputBase';
import ButtonBase from '../../ButtonBase/ButtonBase';
import ErrorText from '../../ErrorText';

import s from '../Auth.module.scss';
import { useSelector } from 'react-redux';
import { getUserLoadingSelector } from '../../../store/user';

const RegisterFormStepTwo = ({ onNext, formik }) => {
  const isLoading = useSelector(getUserLoadingSelector);
  const [filteredCities, setFilteredCities] = useState([]);

  const searchCity = value => {
    if (!value.length) {
      setFilteredCities([]);
      return;
    }
    const filteredCities = citiesArray.reduce((acc, el) => {
      if (el.city.toUpperCase().startsWith(value.toUpperCase())) {
        acc.push({
          value: `${el.city}, ${el.admin_name}`,
          label: `${el.city}, ${el.admin_name}`,
        });
        return acc;
      }
      return acc;
    }, []);
    setFilteredCities(filteredCities);
  };

  const { values, handleChange, errors, touched, setFieldValue, handleSubmit } =
    formik;

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
      <div className={s.input__container}>
        {' '}
        <InputBase
          styles={s.inputBottomMargin}
          id="name"
          type="name"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
        {touched.name && errors.name ? <ErrorText text={errors.name} /> : null}
      </div>

      <div className={s.input__container}>
        <Select
          id="city"
          name="city"
          placeholder="City, region"
          isClearable={false}
          onChange={({ value }) => setFieldValue('city', value, true)}
          onInputChange={searchCity}
          options={filteredCities}
          closeMenuOnSelect
          loadingMessage={true}
          className="city-select-container"
          classNamePrefix="city-select"
          showNewOptionAtTop={false}
        />
        {touched.city && errors.city ? <ErrorText text={errors.city} /> : null}
      </div>

      <div className={s.input__container}>
        <PhoneInput
          id="phone"
          placeholder="Mobile phone"
          name="phone"
          country={'ua'}
          disableDropdown
          countryCodeEditable={false}
          onKeyDown={handleKeyDown}
          enableClickOutside={false}
          enableAreaCodes={true}
          value={values.phone}
          onChange={value => setFieldValue('phone', value, true)}
        />
        {touched.phone && errors.phone ? (
          <ErrorText text={errors.phone} />
        ) : null}
      </div>

      <ButtonBase type="submit" text="Register" disabled={isLoading} />
      <ButtonBase onClick={onNext} type="button" text="Back" isLigth />
    </>
  );
};

export default RegisterFormStepTwo;
