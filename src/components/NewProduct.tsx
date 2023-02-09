import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Header from './Header';
import { motion } from 'framer-motion';
import { useAppDispatch } from '@/store';
import { useFormik } from 'formik';
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { Categorys, dataApi } from '@/fectApi';
import { basicSchemaAddCart } from '@/schemas';

type Props = {};

const NewProduct = (props: Props) => {
  const {
    values,
    setFieldValue,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    handleBlur,
    handleChange,
  } = useFormik({
    initialValues: {
      title: '',
      file: '',
      price: '',
      description: '',
      numberofwarehouses: '',
      Category: 'Áo quần trẻ em',
    },
    validationSchema: basicSchemaAddCart,
    onSubmit: (values) => {
      console.log(values);
      dataApi.push({
        id: dataApi.length + 1,
        title: values.title,
        Url: values.file,
        price: Number(values.price),
        description: values.description,
        Qty: 0,
        qty: 1,
        Numberofwarehouses: Number(values.numberofwarehouses),
        Sport: 1,
        Category: values.Category,
        checkbox: false,
      });
      setFieldValue('title', '');
      setFieldValue('file', '');
      setFieldValue('price', '');
      setFieldValue('description', '');
      setFieldValue('numberofwarehouses', '');
      setFieldValue('Category', '');
    },
  });

  // const render = new FileReader();
  // render.readAsDataURL(values.file);
  // render.onload = () => {
  //   setPriview(render.result);
  // };
  console.log(values);
  console.log(dataApi);

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="flex min-h-[880px] justify-center bg-slate-200 ">
        <div className="mt-7 mb-7  border-[2px] border-solid px-20 py-7">
          <div className="mt-7 border-t-0 border-b-2 border-l-0 border-r-0 border-solid  border-red-800  ">
            <h1 className="text-center text-red-800 ">
              Thêm sản phẩm.
            </h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className=" relative  mt-11 h-[77%] text-center"
          >
            <div className="">
              <div className="flex justify-start">
                <label htmlFor="title" className="">
                  Tên sản phẩm: &nbsp;
                </label>
                <input
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="title"
                  placeholder="Enter your title..."
                  type={'text'}
                  className="rounded-sm border-[1px] border-solid border-orange-800 px-2 text-indigo-800 shadow-sm"
                />
              </div>
              {errors.title && touched.title && <p>{errors.title}</p>}
              <div className="mt-7">
                <div className="border-Gray group  flex h-[220px] w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dotted">
                  {!values.file ? (
                    <>
                      <label className="flex h-full w-full cursor-pointer flex-col items-center justify-center ">
                        <div className="w-ful flex h-full flex-col items-center justify-center gap-2">
                          <MdCloudUpload className="text-Gray hover:text-textColor text-3xl" />
                          <p className="text-Gray hover:text-textColor">
                            Click here to upload
                          </p>
                        </div>
                        <input
                          name="file"
                          onBlur={handleBlur}
                          placeholder="Enter your file..."
                          type={'file'}
                          className="h-0 w-0"
                          onChange={(e) => {
                            if (e.target.files != null) {
                              setFieldValue(
                                'file',
                                URL.createObjectURL(e.target.files[0])
                              );
                            }
                          }}
                        />
                      </label>
                    </>
                  ) : (
                    <>
                      <div className="relative h-full">
                        <img
                          src={values.file}
                          alt="uploadimage"
                          className="h-[220px] w-full object-cover"
                        />
                        <button
                          className="bg-cartNumBg absolute bottom-3 right-3 cursor-pointer rounded-full p-3 text-xl outline-none transition-all duration-500 ease-in-out hover:shadow-md"
                          onClick={() => setFieldValue('file', '')}
                        >
                          <MdDelete className="text-red-900" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {errors.file && touched.file && <p>{errors.file}</p>}
              <div className="mt-7 flex justify-start">
                <label>Giá sản phẩm: &nbsp;</label>
                <input
                  type={'number'}
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="price"
                  placeholder="Enter your price..."
                  className="rounded-sm border-[1px] border-solid border-orange-800 px-2 text-indigo-800 shadow-sm"
                />
              </div>
              {errors.price && touched.price && <p>{errors.price}</p>}
              <div className="mt-7 flex justify-start">
                <label>Thông tin sản phẩm: &nbsp; </label>
                <input
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="description"
                  placeholder="Enter your description..."
                  className="rounded-sm border-[1px] border-solid border-orange-800 px-2 text-indigo-800 shadow-sm"
                />
              </div>
              {errors.description && touched.description && (
                <p>{errors.description}</p>
              )}
              <div className="mt-7 flex justify-start">
                <label>Số lượng trong kho: &nbsp; </label>
                <input
                  value={values.numberofwarehouses}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type={'number'}
                  id="numberofwarehouses"
                  placeholder="Enter your numberofwarehouses..."
                  className="rounded-sm border-[1px] border-solid border-orange-800 px-2 text-indigo-800 shadow-sm"
                />
              </div>
              {errors.numberofwarehouses &&
                touched.numberofwarehouses && (
                  <p>{errors.numberofwarehouses}</p>
                )}
              <div className="mt-7 flex justify-start">
                <label>Loại sản phẩm: &nbsp; </label>
                <select
                  value={values.Category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="Category"
                  placeholder="Enter your Category..."
                  className="h-7 w-60 cursor-pointer rounded-sm border-[1px] border-solid border-orange-800 px-2 text-indigo-800 shadow-sm outline-none focus-visible:border-orange-800"
                >
                  {Categorys.map((data) => (
                    <option
                      className="cursor-pointer border-0 capitalize outline-none"
                      key={data.Category}
                    >
                      {data.Category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <motion.button
              whileTap={{ scale: 0.7 }}
              className=" absolute left-0 bottom-0 h-9 w-full rounded-md bg-red-900 text-xl text-white shadow-md hover:bg-red-800 hover:text-red-300 "
              type="submit"
            >
              Save
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
