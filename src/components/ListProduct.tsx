import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import { dataApi } from '@/fectApi';

type Props = {};

function ListProduct({}: Props) {
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
        <div className="basis-3/4 text-center">
          {dataApi.map((data) => (
            <div>
              <p>{data.title}</p>
              <img src={data.Url} alt="cr7" />
              <p>{data.description}</p>
              <p>{data.price}</p>
              <p>{data.Qty}</p>
              <p>{data.Numberofwarehouses}</p>
              <button className="">sửa</button>
              <button className="">xoá</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
