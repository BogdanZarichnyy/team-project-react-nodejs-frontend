import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { parse } from 'date-fns';

import AddPetFormStepOne from './AddPetFormStepOne';
import AddPetFormStepTwo from './AddPetFormStepTwo';
import { addNewAdsFetch } from '../../../store/ads';
import { useDispatch } from 'react-redux';

import s from './AddPetForm.module.scss';

const today = new Date().toLocaleDateString();
// Изменил имена некоторых полей, как в беке
// Сделал добавление каритинки и превью добавленной картинки
// Переписал логику выбора пола животного
// Сделал отправку на бек
// Надо стилизировать теперь картинку после добавления.
// Пришлось отключить валидацию, тк форма не сабмитилась и не выкидывала ошибок. Я не разбирался, что не так, моя задача отправлять на бек запрос.
const initialValues = {
  category: '',
  addTitle: '',
  name: '',
  birthDate: '',
  breed: '',
  sex: '',
  location: '',
  price: '',
  photo: '',
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
  const formRef = useRef();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    // validationSchema,
    // validateOnMount: true,
    // validateOnBlur: true,
    // validateOnChange: true,
    onSubmit: values => {
      const keys = Object.keys(values);
      const formData = new FormData();

      for (let key of keys) {
        formData.append(key, values[key]);
      }
      //======================================================
      // console.log(values);
      for (let [key, val] of formData) {
        console.log(key, val);
      }

      // dispatch(addNewAdsFetch(values));
      fetch(
        'https://test-team-project-react-nodejs-production.up.railway.app/api/notices',
        {
          method: 'POST',
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjk5MTZmNDg2ODQ5MzMwODkyYWY2OSIsImlhdCI6MTY3MzI2NDA1MCwiZXhwIjoxNjczMzUwNDUwfQ.OszRW6XMXzEIXRBJQERg1k-hVYfOHRxmqVbYq6MvrVE',
          },
          body: formData,
        }
      ).then(data => console.log(data));

      //======================================================
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
