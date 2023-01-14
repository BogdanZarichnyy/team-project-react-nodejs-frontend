import { forwardRef, useState } from 'react';
import Select from 'react-select';
import citiesArray from '../../../constants/citiesArray';
import './ProfileContactItemCity.css';

const ProfileContactItemCity = forwardRef(
  ({ style, isDisabled, val, setVal }, ref) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
      <Select
        className="city-select-container"
        classNamePrefix="city-select"
        isDisabled={isDisabled}
        // isLoading={isLoading}
        isClearable={true}
        isSearchable={true}
        ref={ref}
        // value={val}
        onChange={option => setVal(option.city)}
        options={citiesArray}
        getOptionLabel={option => option.city}
        getOptionValue={option => option.city}
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
