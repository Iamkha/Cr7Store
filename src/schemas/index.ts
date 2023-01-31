import * as yup from 'yup';

const passwordRules = /^(?=.[a-z]).{7,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email('please enter a valid email')
    .required('required'),
  password: yup.string().required('required'),
});
