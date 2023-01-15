import { forwardRef, useState } from 'react';
import Select from 'react-select';
import citiesArray from '../../../constants/citiesArray';
import './ProfileContactItemCity.scss';

const ProfileContactItemCity = forwardRef(
  ({ isDisabled, val, setVal }, ref) => {
    const value = { label: String(val), value: String(val) };
    console.log(value);

    return (
      <Select
        className="city-select-container"
        classNamePrefix="city-select"
        isDisabled={isDisabled}
        isClearable={true}
        isSearchable={true}
        ref={ref}
        value={[value]}
        // defaultValue={value}
        // inputValue={val}
        onChange={({ city }) => setVal(city)}
        options={citiesArray}
        getOptionValue={({ city }) => city}
        getOptionLabel={({ city }) => city}
        noOptionsMessage={() => 'City not found'}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
      />
    );
  }
);

export default ProfileContactItemCity;
