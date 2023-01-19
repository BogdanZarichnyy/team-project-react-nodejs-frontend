import * as Yup from 'yup';

export const restorePasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid e-mail')
    .matches(
      /^([a-zA-Z0-9._]{1}[a-zA-Z0-9._-]+)+@[a-zA-Z0-9._-]+\.([a-zA-Z0-9._-]*[a-zA-Z0-9._]+)$/,
      'Is not in correct format'
    )
    .min(7, 'Email must be at least 7 characters long')
    .max(63, 'Email must be 63 characters maximum')
    .required('Required field to fill!'),
});
