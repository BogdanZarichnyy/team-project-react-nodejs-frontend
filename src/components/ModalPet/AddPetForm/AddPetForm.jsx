import React, { useRef, useState, useContext } from 'react';
import { useFormik } from 'formik';

import { addNewAdsFetch } from '../../../store/ads';
import { useDispatch } from 'react-redux';
import { ModalContext } from '../../ModalRework';
import { addPetFormSchema } from '../../../validation/addPetFormSchema';

import AddPetFormStepOne from './AddPetFormStepOne';
import AddPetFormStepTwo from './AddPetFormStepTwo';

import s from './AddPetForm.module.scss';

const initialValues = {
  category: '',
  addTitle: '',
  name: '',
  birthDate: '',
  breed: '',
  sex: '',
  location: '',
  price: '$',
  photo: {},
  passport: {},
  comments: '',
};

const AddPetForm = () => {
  const [step, setStep] = useState(1);
  const formRef = useRef();
  const dispatch = useDispatch();
  const { handleModal } = useContext(ModalContext);

  const formik = useFormik({
    initialValues,
    validationSchema: addPetFormSchema,
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

      dispatch(addNewAdsFetch(formData));

      handleModal();
    },
  });

  return (
    <form className={s.form} onSubmit={formik.handleSubmit} ref={formRef}>
      {step === 1 ? (
        <AddPetFormStepOne formik={formik} onNext={() => setStep(2)} />
      ) : (
        <AddPetFormStepTwo formik={formik} onNext={() => setStep(1)} />
      )}
    </form>
  );
};

export default AddPetForm;
