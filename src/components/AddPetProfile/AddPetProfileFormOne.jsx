import React, { useContext, useState } from 'react';
import ButtonBase from '../ButtonBase/ButtonBase';
import ErrorText from '../ErrorText';
import InputBase from '../InputBase/InputBase';
import { ModalContext } from '../ModalRework';

import s from './AddPetProfile.module.scss';

const AddPetProfileFormOne = ({ onNext, formik }) => {
  let { handleModal } = useContext(ModalContext);
  const [isErrors, setIsErrors] = useState(false);

  const { values, handleChange, errors } = formik;

  const validateFields = () => {
    if (errors.name || errors.birthDate || errors.breed) {
      setIsErrors(true);
    } else {
      onNext();
    }
  };

  return (
    <>
      <h2 className={s.title}>Add pet</h2>
      <label className={s.label}>
        Name pet:<span className={s.labelStar}>*</span>
      </label>
      {isErrors && errors.name && <ErrorText text={errors.name} />}
      <InputBase
        styles={s.input}
        type="text"
        name="name"
        placeholder="Type pet name"
        value={values.name}
        onChange={handleChange}
      />
      <label className={s.label}>
        Day of birth:<span className={s.labelStar}>*</span>
      </label>
      {isErrors && errors.birthDate && <ErrorText text={errors.birthDate} />}
      <InputBase
        styles={s.input}
        type="date"
        id="birthDate"
        name="birthDate"
        placeholder="Type day of birth"
        data-pattern="**.**.****"
        value={values.birthDate}
        onChange={handleChange}
      />

      <label className={s.label}>
        Breed:<span className={s.labelStar}>*</span>
      </label>
      {isErrors && errors.breed && <ErrorText text={errors.breed} />}
      <InputBase
        styles={s.input}
        type="text"
        name="breed"
        id="breed"
        placeholder="Type breed"
        value={values.breed}
        onChange={handleChange}
      />
      <div className={s.buttonWrapper}>
        <ButtonBase
          styles={s.buttonCancel}
          type="button"
          text="Cancel"
          onClick={() => handleModal()}
        />
        <ButtonBase
          styles={s.buttonNext}
          onClick={validateFields}
          type="button"
          text="Next"
        />
      </div>
    </>
  );
};

export default AddPetProfileFormOne;
