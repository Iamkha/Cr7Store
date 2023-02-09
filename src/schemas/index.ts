import * as yup from 'yup';

const passwordRules = /^(?=.[a-z]).{7,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email('please enter a valid email')
    .required('required'),
  password: yup.string().required('required'),
});

export const basicSchemaAddCart = yup.object().shape({
  title: yup.string().required('required'),
  file: yup.mixed().required('File is required'),
  price: yup.number().required('required'),
  description: yup.string().required('required'),
  numberofwarehouses: yup.number().required('required'),
});
