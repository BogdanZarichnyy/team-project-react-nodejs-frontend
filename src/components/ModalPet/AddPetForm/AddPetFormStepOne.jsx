import React, { useContext, useState } from 'react';

import ButtonBase from '../../ButtonBase/ButtonBase';
import ErrorText from '../../ErrorText';
import InputBase from '../../InputBase/InputBase';
import { ModalContext } from '../../ModalRework';

import s from './AddPetForm.module.scss';

const AddPetFormStepOne = ({ onNext, formik }) => {
  let { handleModal } = useContext(ModalContext);
  const [isErrors, setIsErrors] = useState(false);

  const { values, handleChange, errors } = formik;

  const validateFields = () => {
    if (errors.addTitle || errors.name || errors.birthDate || errors.breed) {
      setIsErrors(true);
    } else {
      onNext();
    }
  };

  return (
    <>
      <h2 className={s.title}>Add pet</h2>
      <p className={s.subtitle}>Write some information about your notice</p>

      <div className={s.listButton} role="group">
        <label htmlFor="lost-found">
          <input
            type="radio"
            name="category"
            id="lost-found"
            value="lostFound"
            className={s.styledRadio}
            onChange={handleChange}
          />
          <span className={s.itemRadio}>lost/found</span>
        </label>
        <label htmlFor="for-free">
          <input
            type="radio"
            name="category"
            id="for-free"
            value="inGoodHands"
            className={s.styledRadio}
            onChange={handleChange}
          />
          <span className={s.itemRadio}>in good hands</span>
        </label>
        <label htmlFor="sell">
          <input
            type="radio"
            name="category"
            id="sell"
            value="sale"
            className={s.styledRadio}
            onChange={handleChange}
          />
          <span className={s.itemRadio}>sell</span>
        </label>
      </div>

      <label className={s.label}>
        Tittle of ad:<span className={s.labelStar}>*</span>
      </label>
      {isErrors && errors.addTitle && <ErrorText text={errors.addTitle} />}
      <InputBase
        styles={s.input}
        type="text"
        name="addTitle"
        placeholder="Type pet name"
        value={values.addTitle}
        onChange={handleChange}
      />
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

export default AddPetFormStepOne;
