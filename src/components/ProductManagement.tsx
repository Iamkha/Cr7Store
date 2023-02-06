import React, { useEffect } from 'react';
import Header from './Header';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { dataApi } from '@/fectApi';
import { DataApi } from '@/feature/cartSlide';

type Props = {};

const pushs = {
  id: 14,
  title: 'Số 28 huyền thoại Sporting Lisbon',
  Url: 'https://vcdn1-thethao.vnecdn.net/2012/04/08/106e64e110220639ff082faef0d8ea15.jpg?w=480&h=0&q=100&dpr=1&fit=crop&s=uBi-ysCSVWrFSqwJ2BZfAg',
  price: 89000,
  description:
    'Hàng chất lượng cao, nhập khẩu chính hãng, đọc lạ duy nhất tại Việt nam',
  Qty: 543,
  qty: 1,
  Numberofwarehouses: 2,
  Sport: 1,
  Category: 'Áo quần thể thao',
  checkbox: false,
};

const ProductManagement = (props: Props) => {
  useEffect(() => {
    dataApi.push(pushs);

    console.log('helo', dataApi);
  }, [dataApi]);
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="flex min-h-[880px]  justify-between bg-slate-200 ">
        <div className=" mt-7 mb-7  basis-1/4 border-r border-l-0   border-t-0 border-b-0 border-solid border-red-900">
          <div className="mt-40 text-start">
            <NavLink
              to={'/listproduct'}
              className={({ isActive }) =>
                isActive
                  ? 'mx-auto ml-0 mr-0 flex h-11 w-[70%] cursor-pointer items-center justify-center rounded-md bg-lime-800 text-lg text-white  shadow-lg transition-all duration-100 ease-in-out hover:bg-orange-800 hover:text-sky-200'
                  : 'mx-auto ml-0 mr-0 flex h-11 w-[70%] cursor-pointer items-center justify-center rounded-md bg-orange-800 text-lg text-red-200 shadow-lg transition-all duration-100 ease-in-out hover:bg-lime-800 hover:text-sky-200'
              }
            >
              Danh sách sản phẩm.
            </NavLink>
            <NavLink
              to={'/productmanagement'}
              className={({ isActive }) =>
                isActive
                  ? 'mx-auto mt-7 ml-0 mr-0 flex h-11 w-[70%] cursor-pointer items-center justify-center rounded-md bg-lime-800 text-lg text-white  shadow-lg transition-all duration-100 ease-in-out hover:bg-orange-800 hover:text-sky-200'
                  : 'mx-auto mt-7 ml-0 mr-0 flex h-11 w-[70%] cursor-pointer items-center justify-center rounded-md bg-orange-800 text-lg text-red-200 shadow-lg transition-all duration-100 ease-in-out hover:bg-lime-800 hover:text-sky-200'
              }
            >
              Chỉnh sửa sản phẩm.
            </NavLink>
            <NavLink
              to={'/newproduct'}
              className={({ isActive }) =>
                isActive
                  ? ' mx-auto mt-7 ml-0 mr-0 flex h-11 w-[70%] cursor-pointer items-center justify-center rounded-md bg-lime-800 text-lg text-white  shadow-lg transition-all duration-100 ease-in-out hover:bg-orange-800 hover:text-sky-200'
                  : 'mx-auto mt-7 ml-0 mr-0 flex h-11 w-[70%] cursor-pointer items-center justify-center rounded-md bg-orange-800 text-lg text-red-200 shadow-lg transition-all duration-100 ease-in-out hover:bg-lime-800 hover:text-sky-200'
              }
            >
              Thêm sản phẩm.
            </NavLink>
          </div>
        </div>
        <div className="basis-3/4 text-center">content</div>
      </div>
    </div>
  );
};

export default ProductManagement;
