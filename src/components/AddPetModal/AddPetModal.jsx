import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useModal } from '../ModalCustom/ModalCustom';
import InputBase from '../InputBase/InputBase';
import ButtonBase from '../ButtonBase/ButtonBase';
import s from './AddPetModal.module.scss';

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

const AddPetModal = ({ onNext }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => console.log(values),
  });

  const { values, handleChange, handleSubmit } = formik;

  const { handleToggle } = useModal();

  useEffect(() => {
    console.log(values);
  }, [values]);

  const handeleFormCancel = () => {
    handleToggle();
  };

  return (
    <form
      className={s.form}
      onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h1 className={s.title}>Add pet</h1>
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
          styles={s.buttonNext}
          onClick={onNext}
          type="button"
          text="Next"
        />
        <ButtonBase
          styles={s.buttonCancel}
          onClick={handeleFormCancel}
          type="button"
          text="Cancel"
        />
      </div>
    </form>
  );
};

export default AddPetModal;
