import React from 'react';
import { useFormik } from 'formik';
import { basicSchema } from '@/schemas';
import { useNavigate } from 'react-router-dom';
import { DataUser } from '@/fectApi';
import { motion } from 'framer-motion';
import { useAppDispatch } from '@/store';
import { addToUser } from '@/feature/userSlide';

const onSubmit = async (values: any, actions: any) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetFrom();
};

const Login = () => {
  const Navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    handleBlur,
    handleChange,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: basicSchema,
    onSubmit: (values) => {
      setTimeout(() => {
        DataUser.map((data) => {
          if (
            data.email === values.email &&
            data.password === values.password
          ) {
            Navigate('/');
            dispatch(addToUser({ data }));
          }
        });
      }, 2000);
    },
  });
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="flex h-[100vh] w-full items-center justify-center bg-slate-200"
    >
      <div className="flex h-[400px] w-[35%] flex-col gap-10 rounded-lg border border-solid bg-amber-200">
        <p className="ml-7 text-center text-lg font-semibold text-red-700 ">
          Đăng Nhập
        </p>
        <div className="relative mx-auto mb-5 w-[90%]">
          <div className="mx-auto flex h-11 w-[80%] justify-between gap-3">
            <label htmlFor="email" className="mx-auto h-full">
              Email:
            </label>
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="email"
              type="email"
              placeholder="Enter your email..."
              className={
                errors.email && touched.email
                  ? 'text-md mx-auto h-7 w-60 rounded-lg p-1 font-medium'
                  : 'text-md mx-auto h-7 w-60 rounded-lg p-1 font-medium'
              }
            ></input>
          </div>
          <div className="flex justify-center">
            {errors.email && touched.email && (
              <p className="absolute  text-xs text-red-600">
                {errors.email}
              </p>
            )}
          </div>
        </div>
        <div className="relative mx-auto mb-5 w-[90%]">
          <div className="mx-auto flex h-11 w-[80%] justify-between gap-3">
            <label htmlFor="password" className="mx-auto h-7 ">
              Password:
            </label>
            <input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              id="password"
              type="password"
              placeholder="Enter your password..."
              className={
                errors.password && touched.password
                  ? 'text-md mx-auto h-7 w-60 rounded-lg p-1 font-medium'
                  : 'text-md mx-auto h-7 w-60 rounded-lg p-1 font-medium'
              }
            ></input>
          </div>
          <div className="flex justify-center">
            {errors.password && touched.password && (
              <p className="absolute text-xs text-red-600">
                {errors.password}
              </p>
            )}
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.7 }}
          className="mx-auto mb-7 h-7 w-64 cursor-pointer rounded-xl "
          disabled={isSubmitting}
          type="submit"
        >
          Submit
        </motion.button>
      </div>
    </form>
  );
};

export default Login;
