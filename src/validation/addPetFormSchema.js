import * as Yup from 'yup';
import { parse } from 'date-fns';

const today = new Date().toLocaleDateString();

export const addPetFormSchema = Yup.object().shape({
  category: Yup.string().required('Category is required!'),
  addTitle: Yup.string().min(2).max(48).required('Field is required!'),
  name: Yup.string()
    .min(2)
    .max(16)
    .matches(
      /^([А-Яа-яЁёЇїІіЄєҐґ'\s]+|[a-zA-Z\s]+){2,}$/,
      'Only alphabetic characters are allowed'
    )
    .required('Field is required!'),
  birthDate: Yup.date()
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
    .min('1960-01-01', 'Date is too early'),
  // .max(today),
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
    .min(1)
    .max(10)
    .matches(
      /^([1-9]+[0-9]*)*\$$/,
      'Only number characters and $ are allowed, e.g. 50$'
    )
    .required('Field is required!'),
  photo: Yup.mixed().required('Image is required! (jpg, jpeg, png)'),
  comments: Yup.string().min(8).max(120).required('Field is required!'),
});
