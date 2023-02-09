import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import { dataApi, Categorys } from '@/fectApi';
import { motion } from 'framer-motion';

type Props = {};

function ListProduct({}: Props) {
  const [category, setCategory] = useState<string>('Tất cả sản Phẩm');
  const [index, setIndex] = useState<number>(1);
  const [search, setSearch] = useState('');

  //tất cả sản phẩm
  const data = dataApi.reduce((ar1: any, ar2) => {
    if (
      category == 'Tất cả sản Phẩm' &&
      ar1.length < 5 &&
      ar2.id > index * 5 - 5
    ) {
      ar1.push(ar2);
    } else if (
      category === ar2.Category &&
      ar1.length < 5 &&
      ar2.id > index * 5 - 5
    ) {
      ar1.push(ar2);
    }
    return ar1;
  }, []);

  // search sản phẩm
  const DataConfig2 = dataApi.reduce((ar1: any, ar2) => {
    if (category === 'Tất cả sản Phẩm') {
      ar1.push(ar2);
    } else if (category === ar2.Category) {
      ar1.push(ar2);
    }
    return ar1;
  }, []);

  const dataSearch = DataConfig2.filter((item: any) => {
    return search.toLowerCase() === ''
      ? item
      : item.title.toLowerCase().includes(search);
  });

  const DataConfig3 = dataSearch.reduce(
    (ar1: any, ar2: any, index2: any) => {
      if (
        category === 'Tất cả sản Phẩm' &&
        ar1.length < 5 &&
        index2 > index * 5 - 6
      ) {
        ar1.push(ar2);
      } else if (
        category === ar2.Category &&
        ar1.length < 5 &&
        index2 > index * 5 - 6
      ) {
        ar1.push(ar2);
      }
      return ar1;
    },
    []
  );

  const dataS = search !== '' ? DataConfig3 : data;

  //pigation
  const lenght = DataConfig2.length || 1;
  const paging = Math.ceil(lenght / 5);
  const lPigatition = Math.max(1, paging);
  const arr = new Array(lPigatition);

  const dataC = arr.fill(1).map((item, index) => {
    return { id: index++, name: index++ };
  });

  const lenght2 = dataSearch.length || 1;
  const pigatitionS = Math.ceil(lenght2 / 5);
  const lPigatitionS = Math.max(1, pigatitionS);
  const arrS = new Array(lPigatitionS);

  const dataCS = arrS.fill(1).map((item, index) => {
    return { id: index++, name: index++ };
  });

  const dataCSS = search !== '' ? dataCS : dataC;

  //disable
  const disabledRight =
    search !== '' ? index >= pigatitionS : index >= paging;

  //handle
  const handleChange = (e: any) => {
    setSearch(e.target.value);
    setIndex(1);
  };
  const handleClickPagitionRight = () => {
    const index2 = index + 1;
    setIndex(Math.min(index2, paging));
  };

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="flex min-h-[888px] bg-slate-200 ">
        <div className=" mb-7 mt-7 flex w-[24%] items-center justify-center border-r  border-l-0  border-t-0 border-b-0 border-solid border-red-900 ">
          <div className=" ">
            <div className="mt-3">
              <motion.button
                onClick={() => {
                  setCategory('Tất cả sản Phẩm');
                  setIndex(1);
                }}
                whileTap={{ scale: 0.7 }}
                className={
                  category == 'Tất cả sản Phẩm'
                    ? 'h-14 w-72 cursor-pointer rounded-md border-solid border-slate-700 bg-orange-800  text-white shadow-lg transition-all duration-100 ease-in-out '
                    : 'h-14 w-72 cursor-pointer rounded-md border-solid border-slate-700 bg-lime-800  text-indigo-100 shadow-lg transition-all duration-100 ease-in-out hover:bg-orange-800 hover:text-sky-200'
                }
                // className="h-14 w-36 cursor-pointer rounded-md border-solid border-slate-700 bg-lime-800  text-white shadow-lg transition-all duration-100 ease-in-out hover:bg-orange-800 hover:text-sky-200 "
              >
                Tất cả sản Phẩm
              </motion.button>
            </div>
            {Categorys.map((data) => (
              <div key={data.Category} className="mt-3">
                <motion.button
                  onClick={() => {
                    setCategory(data.Category);
                    setIndex(1);
                  }}
                  whileTap={{ scale: 0.7 }}
                  className={
                    category == data.Category
                      ? 'h-14 w-72 cursor-pointer rounded-md border-solid border-slate-700 bg-orange-800  text-white shadow-lg transition-all duration-100 ease-in-out '
                      : 'h-14 w-72 cursor-pointer rounded-md border-solid border-slate-700 bg-lime-800  text-indigo-100 shadow-lg transition-all duration-100 ease-in-out hover:bg-orange-800 hover:text-sky-200'
                  }
                  // className="h-14 w-36 cursor-pointer rounded-md border-solid border-slate-700 bg-lime-800  text-white shadow-lg transition-all duration-100 ease-in-out hover:bg-orange-800 hover:text-sky-200 "
                >
                  {data.Category}
                </motion.button>
              </div>
            ))}
          </div>
        </div>
        <div className="ml-7 mt-10 w-full">
          <div className="mt-7 flex items-center justify-center gap-3 ">
            <p className="my-auto mt-0 mb-0">Tìm kiếm sản phẩm:</p>
            <input
              onChange={handleChange}
              type={'search'}
              placeholder="Hãy nhập sản phẩm cần tìm..."
              className="h-7 w-96  rounded-md border-r border-l border-t border-b border-solid border-red-900 px-3 text-violet-700 shadow-sm"
            />
          </div>
          <div className="mt-7 h-11 w-full text-lg font-semibold text-blue-900">
            <ul className="flex w-[72%]  items-center justify-between ">
              <li className="w-40">Title</li>
              <li className="w-24">Image</li>
              <li className="w-72">Description</li>
              <li>Price</li>
              <li className="w-16">Quantity Sold</li>
              <li className="w-16">Number Of warehouses</li>
            </ul>
          </div>

          <div className="mt-20 h-[550px]">
            {dataS.map((data: any) => (
              <div key={data.id} className=" mt-3 flex items-center ">
                <span className=" mr-6 w-56  ">{data.title}</span>
                <img
                  src={data.Url}
                  alt="cr7"
                  className=" mr-6 h-24 w-24 rounded-md  object-cover shadow-sm"
                />
                <p className=" mr-6 w-96 ">{data.description}</p>
                <p className="mr-6 w-32">{data.price}$.</p>
                <p className="mr-6 w-32">{data.Qty}</p>
                <p className="mr-6 w-40">{data.Numberofwarehouses}</p>
                <motion.button
                  whileTap={{ scale: 0.7 }}
                  className="mr-6 h-9 w-14 rounded-md bg-orange-900 text-gray-200 shadow-sm hover:bg-orange-700"
                >
                  sửa
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.7 }}
                  className="h-9 w-14 rounded-md bg-orange-900 text-gray-200 shadow-sm hover:bg-orange-700"
                >
                  xoá
                </motion.button>
              </div>
            ))}
          </div>
          <div className=" bottom-0 mt-7 flex items-center justify-center gap-3">
            <button
              disabled={index <= 1}
              value={index === 1 ? 1 : index - 1}
              onClick={(e: any) => {
                setIndex(+e.target.value);
              }}
              className="text-md h-7 w-16  cursor-pointer border border-gray-900  text-black  hover:bg-slate-300  disabled:bg-slate-100 disabled:hover:bg-slate-100"
            >
              Back
            </button>
            {dataCSS.map((data) => (
              <div key={data.id}>
                <button
                  value={data.name}
                  onClick={(e: any) => {
                    setIndex(+e.target.value);
                  }}
                  className={`${
                    data.name == index
                      ? 'text-md  h-7 w-7  cursor-pointer  bg-slate-600 text-white  hover:border-orange-200 hover:bg-red-300'
                      : 'text-md  h-7 w-7 cursor-pointer border border-gray-900   hover:border-orange-200 hover:bg-red-300'
                  }`}
                >
                  {data.name}
                </button>
              </div>
            ))}
            <button
              disabled={disabledRight}
              onClick={handleClickPagitionRight}
              className="text-md h-7 w-16  cursor-pointer border border-gray-900  text-black  hover:bg-slate-300  disabled:bg-slate-100 disabled:hover:bg-slate-100"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
