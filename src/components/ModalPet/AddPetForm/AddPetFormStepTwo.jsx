import React from 'react';
import ButtonBase from '../../ButtonBase/ButtonBase';
import InputBase from '../../InputBase/InputBase';
import ProfileAvatarAddButton from '../../Profile/ProfileAvatarAddButton';
import sprite from '../../../images/sprite.svg';
import s from './AddPetForm.module.scss';
import ErrorText from '../../ErrorText';

const AddPetFormStepTwo = ({ onNext, formik }) => {
  const { values, handleChange, handleSubmit, errors, touched } = formik;
  console.log(values);

  return (
    <form
      className={s.form}
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h2 className={s.title}>Add pet</h2>
      <fieldset className={s.sexWrapper}>
        <legend className={s.label}>
          The sex<span className={s.labelStar}>*</span>:
        </legend>
        <label htmlFor="male" className={s.sexLabel}>
          <input
            className={s.sexInput}
            type="radio"
            id="male"
            name="sex"
            alt="male"
            value={values.male}
          />
          <span className={s.sexIcon}>
            <svg>
              <use href={`${sprite}#maleIconColored`}></use>
            </svg>
          </span>
          <span className={s.sexText}>Male</span>
        </label>
        <label htmlFor="female" className={s.sexLabel}>
          <input
            className={s.sexInput}
            type="radio"
            id="female"
            name="sex"
            alt="female"
            value={values.female}
            onChange={handleChange}
          />
          <span className={s.sexIcon}>
            <svg>
              <use href={`${sprite}#femaleIconColored`}></use>
            </svg>
          </span>
          <span className={s.sexText}>Female</span>
        </label>
      </fieldset>
      <label className={s.label} htmlFor="location">
        Location<span className={s.labelStar}>*</span>:
      </label>
      {touched.location && errors.location ? (
        <ErrorText text={errors.location} />
      ) : null}
      <InputBase
        styles={s.input}
        type="text"
        name="location"
        id="location"
        placeholder="Type location"
        value={values.location}
        onChange={handleChange}
      />
      {values.category === 'sell' && (
        <>
          <label className={s.label} htmlFor="price">
            Price<span className={s.labelStar}>*</span>:
          </label>
          {touched.price && errors.price ? (
            <ErrorText text={errors.price} />
          ) : null}
          <InputBase
            styles={s.input}
            type="text"
            name="price"
            id="price"
            placeholder="Type price"
            value={values.price}
            onChange={handleChange}
          />
        </>
      )}
      <label className={s.label} htmlFor="image">
        Load the pet’s image:
      </label>
      <div className={s.avatarWrapper}>
        <svg className={s.avatarIcon}>
          <use href={`${sprite}#i-cross-lg4`}></use>
          <input
            className={s.avatarInput}
            type="file"
            id="image"
            name="image"
            accept=".jpg,.png"
          />
        </svg>
      </div>

      <label className={s.label} htmlFor="comments">
        Comments
      </label>
      {touched.comments && errors.comments ? (
        <ErrorText text={errors.comments} />
      ) : null}
      <InputBase
        styles={s.input}
        type="text"
        name="comments"
        id="comments"
        placeholder="Type comment"
        value={values.comments}
        onChange={handleChange}
        rows="3"
      />
      <div className={s.buttonWrapper}>
        <ButtonBase
          styles={s.buttonCancel}
          type="button"
          text="Back"
          onClick={onNext}
          isLigth
        />
        <ButtonBase styles={s.buttonNext} type="submit" text="Done" />
      </div>
    </form>
  );
};

export default AddPetFormStepTwo;
