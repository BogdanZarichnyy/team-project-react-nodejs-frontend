import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { parse } from 'date-fns';

import AddPetFormStepOne from './AddPetFormStepOne';
import AddPetFormStepTwo from './AddPetFormStepTwo';

const today = new Date().toLocaleDateString();

const initialValues = {
  category: '',
  titleName: '',
  petName: '',
  petDayOfBirth: '',
  breed: '',
  sex: '',
  location: '',
  price: '',
  image: '',
  comments: '',
};

const validationSchema = Yup.object({
  category: Yup.string().required('Category is required!'),
  titleName: Yup.string().min(2).max(48).required('Field is required!'),
  petName: Yup.string()
    .min(2)
    .max(16)
    .matches(
      /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
      'Only alphabetic characters are allowed'
    )
    .required('Field is required!'),
  petDayOfBirth: Yup.date()
    .test('len', 'Must be exactly DD.MM.YYYY', (value, { originalValue }) => {
      if (originalValue) {
        return originalValue.length === 10;
      }
    })
    .transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      const result = parse(originalValue, 'dd.MM.yyyy', new Date());
      return result;
    })
    .typeError('Please enter a valid date')
    .required('Field is required!')
    .min('1960-01-01', 'Date is too early')
    .max(today),
  breed: Yup.string()
    .max(16)
    .matches(
      /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
      'Only alphabetic characters are allowed'
    )
    .required('Field is required!'),
  sex: Yup.string().required('Field is required!'),
  location: Yup.string()
    .min(2)
    .max(48)
    .matches(/\D/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  price: Yup.string()
    .min(2)
    .max(10)
    .matches(
      /^[1-9]+[0-9]*\$$/g,
      'Only number characters and $ are allowed, e.g. 50$'
    )
    .required('Field is required!'),
  image: Yup.mixed().required('Image is required! (jpg, jpeg, png)'),
  comments: Yup.string().min(8).max(120).required('Field is required!'),
});

const AddPetForm = () => {
  const [step, setStep] = useState(1);

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: values => console.log(values),
  });

  return (
    <>
      {step === 1 ? (
        <AddPetFormStepOne formik={formik} onNext={() => setStep(2)} />
      ) : (
        <AddPetFormStepTwo formik={formik} onNext={() => setStep(1)} />
      )}
    </>
  );
};

export default AddPetForm;
