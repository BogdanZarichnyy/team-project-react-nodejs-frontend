import * as yup from 'yup';

import { regExp } from './regexp';

export const validateUser = {
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(regExp.nameRegExp, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  email: yup
    .string()
    .email('Please enter a valid e-mail')
    .matches(regExp.email, 'Not correct email format')
    .min(7, 'Must be at least 7 characters long')
    .max(63, 'Must be 63 characters maximum'),
  city: yup
    .string()
    .min(2)
    .max(48)
    .matches(regExp.string, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  date: yup
    .date()
    .test('len', 'Must be exactly DD.MM.YYYY', (value, { originalValue }) => {
      if (originalValue) {
        return originalValue.length === 10;
      }
    }),
};
