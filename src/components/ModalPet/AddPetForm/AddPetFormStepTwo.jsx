import React, { useEffect, useRef, useState } from 'react';
import ButtonBase from '../../ButtonBase/ButtonBase';
import InputBase from '../../InputBase/InputBase';
import sprite from '../../../images/sprite.svg';
import s from './AddPetForm.module.scss';
import ErrorText from '../../ErrorText';
import IconComponent from '../../IconComponent';
import { formData } from './AddPetForm';

const AddPetFormStepTwo = ({ onNext, formik }) => {
  const photoRef = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState(null);
  const [fileName, setFileName] = useState('');
  const { values, handleChange, errors, touched, setFieldValue } = formik;

  useEffect(() => {
    if (!selectedFile) {
      setPreviewPhoto(null);
      return;
    }

    const objUrl = URL.createObjectURL(selectedFile);
    setPreviewPhoto(objUrl);

    return () => URL.revokeObjectURL(objUrl);
  }, [selectedFile]);

  const handlePhotoChange = e => {
    const file = e.target.files[0];
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      return;
    }
    setSelectedFile(file);

    const reader = new FileReader();

    reader.onloadend = () => setFileName(file.name);
    if (file.name !== fileName) {
      reader.readAsDataURL(file);
      setFieldValue('photo', file);
    }
  };

  return (
    <>
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
            value="male"
            onChange={handleChange}
            error={errors.options}
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
            value="female"
            onChange={handleChange}
            error={errors.options}
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
      {values.category === 'sale' && (
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
      <label className={s.label} htmlFor="photo">
        Load the pet’s photo:
      </label>
      {previewPhoto ? (
        <img
          src={previewPhoto}
          alt="Pet"
          onClick={() => photoRef.current.click()}
        />
      ) : (
        <div
          className={s.avatarWrapper}
          onClick={() => photoRef.current.click()}
        >
          <IconComponent iconname="i-cross-lg4" classname={s.avatarIcon} />
        </div>
      )}
      <input
        className={s.avatarInput}
        type="file"
        id="photo"
        name="photo"
        accept=".jpg,.png"
        onChange={e => {
          handleChange(e);
          handlePhotoChange(e);
        }}
        ref={photoRef}
      />
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
    </>
  );
};

export default AddPetFormStepTwo;
