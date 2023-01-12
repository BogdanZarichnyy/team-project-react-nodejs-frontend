import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import citiesArray from '../../../constants/citiesArray';

import InputBase from '../../InputBase/InputBase';
import ButtonBase from '../../ButtonBase/ButtonBase';
import ErrorText from '../../ErrorText';

import s from '../Auth.module.scss';
console.log(citiesArray);
const RegisterFormStepTwo = ({ onNext, formik }) => {
  // const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     'https://test-team-project-react-nodejs-production.up.railway.app/api/cities_of_ukraine'
  //   )
  //     .then(res => res.json())
  //     .then(
  //       result => {
  //         setCities(result);
  //       },
  //       error => {
  //         setCities(error);
  //       }
  //     );
  // }, []);

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

  const { values, handleChange, errors, touched, setFieldValue } = formik;

  return (
    <>
      {touched.name && errors.name ? <ErrorText text={errors.name} /> : null}
      <InputBase
        styles={s.inputBottomMargin}
        type="name"
        name="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
      />
      {touched.city && errors.city ? <ErrorText text={errors.city} /> : null}
      <Select
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
      {touched.phone && errors.phone ? <ErrorText text={errors.phone} /> : null}

      <PhoneInput
        placeholder="Mobile phone"
        name="phone"
        country={'ua'}
        disableDropdown
        enableAreaCodes={true}
        value={values.phone}
        onChange={value => setFieldValue('phone', value, true)}
      />

      <ButtonBase type="submit" text="Register" />
      <ButtonBase onClick={onNext} type="button" text="Back" isLigth />
    </>
  );
};

export default RegisterFormStepTwo;
