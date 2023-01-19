import * as Yup from 'yup';

export const registerPageSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid e-mail')
    .matches(
      /^([a-zA-Z0-9._]{1}[a-zA-Z0-9._-]+)+@[a-zA-Z0-9._-]+\.([a-zA-Z0-9._-]*[a-zA-Z0-9._]+)$/,
      'Is not in correct format'
    )
    .min(7, 'Email must be at least 7 characters long')
    .max(63, 'Email must be 63 characters maximum')
    .required('Required field to fill!'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters long')
    .max(32, 'Password must be 32 characters maximum')
    .required('Required field to fill!')
    .matches(/^[^\s]+$/, 'The field must not contain spaces'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .min(7, 'Confirm password must be at least 7 characters long')
    .max(32, 'Confirm password must be 32 characters maximum')
    .required('Required field to fill!')
    .matches(/^[^\s]+$/, 'The field must not contain spaces'),
  name: Yup.string()
    .required('Required field to fill!')
    .matches(
      /^[a-zA-Zа-яА-ЯёЁіІїЇґҐ' -]+$/,
      'The field must contain only Latin characters'
    )
    .min(1, 'Name must be at least 1 characters long')
    .max(40, 'Name must be 40 characters maximum'),
  city: Yup.string().required(
    'Required field to fill! Please, choose one option from list!'
  ),
  phone: Yup.string()
    .required('Required field to fill!')
    .min(12, 'Number must be 12 characters minimum'),
});
