import React, { useEffect, useContext } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import s from './AddPetFormTwo.module.scss';
import { ModalContext } from '../../ModalRework/ModalContext/ModalContext';
import InputBase from '../../InputBase/InputBase';
import ButtonBase from '../../ButtonBase/ButtonBase';

const initialValues = {
  petName: '',
  petDayOfBirth: '',
  breed: '',
};

const validationSchema = Yup.object({
  petName: Yup.string().required('Required field to fill'),
  petDayOfBirth: Yup.string().required('Required field to fill'),
  breed: Yup.string().required('Required field to fill'),
});

const AddPetFormTwo = () => {
  let { handleModal } = useContext(ModalContext);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => console.log(values),
  });

  const { values, handleChange, handleSubmit } = formik;

  useEffect(() => {
    console.log(values);
  }, [values]);

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
      <ul className={s.listButton}>
        <li>
          <button type="button" className={s.itemButton}>
            lost/found
          </button>
        </li>
        <li>
          <button type="button" className={s.itemButton}>
            in good hands
          </button>
        </li>
        <li>
          <button type="button" className={s.itemButton}>
            sell
          </button>
        </li>
      </ul>
      <label className={s.label}>
        Tittle of ad<span className={s.labelStar}>*</span>
      </label>
      <InputBase
        styles={s.input}
        type="text"
        name="petName"
        placeholder="Type pet name"
        value={values.petName}
        onChange={handleChange}
        required
      />
      <label className={s.label}>Name pet</label>
      <InputBase
        styles={s.input}
        type="text"
        name="petName"
        placeholder="Type pet name"
        value={values.petName}
        onChange={handleChange}
      />
      <label className={s.label}>Day of birth</label>
      <InputBase
        styles={s.input}
        type="text"
        name="petDayOfBirth"
        placeholder="Type day of birth"
        value={values.petDayOfBirth}
        onChange={handleChange}
      />

      <label className={s.label}>Breed</label>
      <InputBase
        styles={s.input}
        type="text"
        name="breed"
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
          type="button"
          text="Done"
          onClick={handleSubmit}
        />
      </div>
    </form>
  );
};

export default AddPetFormTwo;
