import { forwardRef, useState } from 'react';
import Select from 'react-select';
import citiesArray from '../../../constants/citiesArray';
import './ProfileContactItemCity.scss';

const ProfileContactItemCity = forwardRef(
  ({ isDisabled, val, setVal }, ref) => {
    const [filteredCities, setFilteredCities] = useState([]);
    const value = { label: String(val), value: String(val) };

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

    return (
      <Select
        className="city-selector-container"
        classNamePrefix="city-selector"
        isDisabled={isDisabled}
        isClearable={true}
        isSearchable={true}
        ref={ref}
        value={value}
        onInputChange={searchCity}
        onChange={({ label }) => setVal(label)}
        options={filteredCities}
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
