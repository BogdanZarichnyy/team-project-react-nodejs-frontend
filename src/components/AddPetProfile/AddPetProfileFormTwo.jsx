import React, { useEffect, useRef, useState } from 'react';

import ErrorText from '../ErrorText';
import IconComponent from '../IconComponent';
import ButtonBase from '../ButtonBase/ButtonBase';

import s from './AddPetProfile.module.scss';

const AddPetFormStepTwo = ({ onNext, formik }) => {
  const photoRef = useRef();
  const autoGrowRef = useRef();
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

  const autoGrow = () => {
    autoGrowRef.current.style.height = '5px';
    autoGrowRef.current.style.height = autoGrowRef.current.scrollHeight + 'px';
  };

  return (
    <>
      <h2 className={s.title}>Add pet</h2>
      <p className={s.subtitle}>
        Add photo and some comments:<span className={s.labelStar}>*</span>
      </p>
      <label className={s.label} htmlFor="photo"></label>
      {previewPhoto ? (
        <img
          src={previewPhoto}
          alt="Pet"
          onClick={() => photoRef.current.click()}
          className={s.image}
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
        Comments:<span className={s.labelStar}>*</span>
      </label>
      {touched.comments && errors.comments ? (
        <ErrorText text={errors.comments} />
      ) : null}
      <textarea
        onInput={autoGrow}
        ref={autoGrowRef}
        className={s.textarea}
        type="text"
        name="comments"
        id="comments"
        placeholder="Type comment"
        value={values.comments}
        onChange={handleChange}
        maxLength="120"
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
