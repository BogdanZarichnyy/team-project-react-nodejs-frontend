import React, { useContext, useState } from 'react';
import ButtonBase from '../../ButtonBase/ButtonBase';
import ErrorText from '../../ErrorText';
import InputBase from '../../InputBase/InputBase';
import { ModalContext } from '../../ModalRework';
import s from './AddPetForm.module.scss';

const AddPetFormStepOne = ({ onNext, formik }) => {
  let { handleModal } = useContext(ModalContext);
  const [isErrors, setIsErrors] = useState(false);

  const { values, handleChange, handleSubmit, errors } = formik;

  const validateFields = () => {
    if (
      errors.titleName ||
      errors.petName ||
      errors.petDayOfBirth ||
      errors.breed
    ) {
      setIsErrors(true);
    } else {
      onNext();
    }
  };

  return (
    <form
      className={s.form}
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h2 className={s.title}>Add pet</h2>
      <p className={s.subtitle}>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur
      </p>

      <div className={s.listButton} role="group">
        <label htmlFor="lost-found">
          <input
            type="radio"
            name="category"
            id="lost-found"
            value="lost-found"
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
            value="for-free"
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
            value="sell"
            className={s.styledRadio}
            onChange={handleChange}
          />
          <span className={s.itemRadio}>sell</span>
        </label>
      </div>

      <label className={s.label}>
        Tittle of ad<span className={s.labelStar}>*</span>
      </label>
      {isErrors && errors.titleName && <ErrorText text={errors.titleName} />}
      <InputBase
        styles={s.input}
        type="text"
        name="titleName"
        placeholder="Type pet name"
        value={values.titleName}
        onChange={handleChange}
        required
      />
      <label className={s.label}>Name pet</label>
      {isErrors && errors.petName && <ErrorText text={errors.petName} />}
      <InputBase
        styles={s.input}
        type="text"
        name="petName"
        placeholder="Type pet name"
        value={values.petName}
        onChange={handleChange}
      />
      <label className={s.label}>Day of birth</label>
      {isErrors && errors.petDayOfBirth && (
        <ErrorText text={errors.petDayOfBirth} />
      )}
      <InputBase
        styles={s.input}
        type="text"
        id="petDayOfBirth"
        name="petDayOfBirth"
        placeholder="Type day of birth"
        data-pattern="**.**.****"
        value={values.petDayOfBirth}
        onChange={handleChange}
      />

      <label className={s.label}>Breed</label>
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
    </form>
  );
};

export default AddPetFormStepOne;
