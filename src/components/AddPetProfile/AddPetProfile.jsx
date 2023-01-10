import { useContext, useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { ModalContext } from '../ModalRework';
import { addNewAdsFetch } from '../../store/ads';
import AddPetProfileFormOne from './AddPetProfileFormOne';
import AddPetFormStepTwo from './AddPetProfileFormTwo';

import s from './AddPetProfile.module.scss';

const initialValues = {
  name: '',
  birthDate: '',
  breed: '',
  photo: {},
  comments: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required field to fill'),
  birthDate: Yup.string().required('Required field to fill'),
  breed: Yup.string().required('Required field to fill'),
  photo: Yup.mixed().required('Image is required! (jpg, jpeg, png)'),
  comments: Yup.string().min(8).max(120).required('Field is required!'),
});

const AddPetProfile = () => {
  const [step, setStep] = useState(1);
  const formRef = useRef();
  const dispatch = useDispatch();
  const { handleModal } = useContext(ModalContext);

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: values => {
      const keys = Object.keys(values);
      const formData = new FormData();

      for (let key of keys) {
        formData.append(key, values[key]);
      }

      dispatch(addNewAdsFetch(formData));

      handleModal();
    },
  });

  return (
    <form className={s.form} onSubmit={formik.handleSubmit} ref={formRef}>
      {step === 1 ? (
        <AddPetProfileFormOne formik={formik} onNext={() => setStep(2)} />
      ) : (
        <AddPetFormStepTwo formik={formik} onNext={() => setStep(1)} />
      )}
    </form>
  );
};

export default AddPetProfile;
