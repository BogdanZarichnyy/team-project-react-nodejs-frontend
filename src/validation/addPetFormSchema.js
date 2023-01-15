import * as Yup from 'yup';
import { parse } from 'date-fns';

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

export const addPetFormSchema = Yup.object().shape({
  category: Yup.string().required('Category is required!'),
  addTitle: Yup.string()
    .min(2)
    .max(48)
    .matches(
      /^[A-Za-z0-9\s!@#$%^&*()_+=-`~\\\]';:/.,?><]*$/,
      'Latin only, min 2, max 48'
    )
    .required('Field is required!'),
  name: Yup.string()
    .min(2)
    .max(16)
    .matches(/^(?=.{2,16}$)([A-Za-z])*$/, 'Latin only, min 2, max 16')
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
    .min('1960-01-01', 'Date is too early')
    .max(today),
  breed: Yup.string()
    .min(2)
    .max(16)
    .matches(/^(?=.{2,16}$)([A-Za-z])*$/, 'Latin only, min 2, max 16')
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
  photo: Yup.mixed().test('fileSize', 'File no larger than 1Mb', value => {
    const size = value.size;
    if (size) {
      return size <= 1048576;
    }
    if (!size) {
      return true;
    }
  }),
  passport: Yup.mixed().test('fileSize', 'File no larger than 1Mb', value => {
    const size = value.size;
    if (size) {
      return size <= 1048576;
    }
    if (!size) {
      return true;
    }
  }),
  comments: Yup.string()
    .min(8)
    .max(120)
    .matches(
      /^[A-Za-z0-9\s!@#$%^&*()_+=-`~\\\]';:/.,?><]*$/,
      'Latin only, min 8, max 120'
    )
    .required('Field is required!'),
});
