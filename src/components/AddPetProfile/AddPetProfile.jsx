import { useContext, useRef, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { ModalContext } from '../ModalRework';
import { addPetFetch } from '../../store/user';
import { addPetProfileSchema } from '../../validation/addPetProfileShema';
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

const AddPetProfile = () => {
  const [step, setStep] = useState(1);
  const formRef = useRef();
  const dispatch = useDispatch();
  const { handleModal } = useContext(ModalContext);

  const formik = useFormik({
    initialValues,
    validationSchema: addPetProfileSchema,
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: values => {
      const keys = Object.keys(values);
      const formData = new FormData();

      for (let key of keys) {
        if (key === 'photo') {
          if (values[key] instanceof File) {
            formData.append(key, values[key]);
          } else if (values[key] instanceof Object) {
            formData.append(key, '');
          }
        } else {
          formData.append(key, values[key]);
        }
      }

      dispatch(addPetFetch(formData));

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
