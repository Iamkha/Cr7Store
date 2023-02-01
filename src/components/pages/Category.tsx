import { Categorys, dataApi } from '../../fectApi';
import { BsArrowBarRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import react, { useEffect, useState } from 'react';
import { useAppDispatch } from '@/store';
import { addToCart } from '@/feature/cartSlide';
import { addToReview } from '@/feature/reviewSlide';

type Props = {};

const Category = (props: Props) => {
  const dispatch = useAppDispatch();
  const [cate, setCate] = useState<String>('Tất cả sản Phẩm');
  const [index, setIndex] = useState<number>(1);
  const [search, setSearch] = useState('');

  const Datalenght = dataApi.length;
  const paging = Math.ceil(Datalenght / 3);

  const data = dataApi.reduce((ar1, ar2) => {
    if (ar1.price < ar2.price) {
      return ar1;
    } else {
      return ar2;
    }
  });

  const DataConfig = dataApi.reduce((ar1: any, ar2) => {
    if (
      cate === 'Tất cả sản Phẩm' &&
      ar1.length < paging &&
      ar2.id > index * 4 - 4
    ) {
      ar1.push(ar2);
    } else if (
      cate === ar2.Category &&
      ar1.length < paging &&
      ar2.id > index * 4 - 4
    ) {
      ar1.push(ar2);
    }
    return ar1;
  }, []);

  const DataConfig2 = dataApi.reduce((ar1: any, ar2) => {
    if (cate === 'Tất cả sản Phẩm') {
      ar1.push(ar2);
    } else if (cate === ar2.Category) {
      ar1.push(ar2);
    }
    return ar1;
  }, []);

  const pigatition = Math.ceil(DataConfig2.length / paging);
  const lPigatition = Math.max(1, pigatition);
  const arr = new Array(lPigatition);

  const dataC = arr.fill(1).map((item, index) => {
    return { id: index++, name: index++ };
  });

  const dataSearch = DataConfig2.filter((item: any) => {
    return search.toLowerCase() === ''
      ? item
      : item.title.toLowerCase().includes(search);
  });

  const DataConfig3 = dataSearch.reduce(
    (ar1: any, ar2: any, index2: any) => {
      if (
        cate === 'Tất cả sản Phẩm' &&
        ar1.length < paging &&
        index2 > index * 4 - 5
      ) {
        ar1.push(ar2);
      } else if (
        cate === ar2.Category &&
        ar1.length < paging &&
        index2 > index * 4 - 5
      ) {
        ar1.push(ar2);
      }
      return ar1;
    },
    []
  );

  const pigatitionS = Math.ceil(dataSearch.length / paging);

  const lPigatitionS = Math.max(1, pigatitionS);

  const arrS = new Array(lPigatitionS);

  const dataCS = arrS.fill(1).map((item, index) => {
    return { id: index++, name: index++ };
  });

  const dataCSS = search !== '' ? dataCS : dataC;

  const dataS = search !== '' ? DataConfig3 : DataConfig;

  const disabledRight =
    search !== '' ? index >= pigatitionS : index >= pigatition;

  const handleClickPagitionRight = () => {
    const index2 = index + 1;
    setIndex(Math.min(index2, pigatition));
  };

  const handleChange = (e: any) => {
    setSearch(e.target.value);
    setIndex(1);
  };
  const handleCatrgory = (e: any) => {
    setCate(e.target.value);
    setIndex(1);
  };
  return (
    <div className="flex gap-20">
      <div className="w-[300px]">
        <div className=" mb-3 flex w-[300px] gap-2 pl-3">
          <Link
            to={'/'}
            className="my-auto w-[100px] hover:text-red-500"
          >
            Trang chủ
          </Link>
          <BsArrowBarRight className="my-auto " />
          <p className="m-0 ml-1 w-[120px]">Sản phẩm.</p>
        </div>
        <div>
          <div className=" w-72 rounded-md border border-solid bg-amber-100">
            <div className=" my-auto mt-0 mb-0 border border-solid">
              <p className="  pl-5 text-lg font-medium  text-indigo-600">
                Category:
              </p>
            </div>
            {Categorys.map((category, index) => (
              <div
                key={index}
                className=" h-11 cursor-pointer border border-solid  hover:text-lime-500"
              >
                <button
                  value={category.Category}
                  onClick={handleCatrgory}
                  className={`${
                    category.Category === cate
                      ? 'h-full w-full cursor-pointer border-none bg-red-400 text-lg outline-none'
                      : 'h-full w-full cursor-pointer border-none bg-amber-100 text-lg outline-none'
                  }`}
                >
                  {category.Category}.
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className=" mt-7">
          <div className="w-72 rounded-xl border border-solid bg-amber-50 p-8  shadow-lg  hover:shadow-2xl ">
            <p className="text-center text-xl font-normal text-violet-900 ">
              Giá rẻ nhất Shop.
            </p>
            <div className="flex  items-center justify-center">
              <Link to={'/review'}>
                <img
                  src={data.Url}
                  onClick={() => dispatch(addToReview({ data }))}
                  alt="cr7"
                  className="w-52 rounded-xl shadow-md "
                />
              </Link>
            </div>
            <p className="mt-3 text-center text-xl font-normal text-red-600">
              {data.title}.
            </p>
            <div className="flex items-center justify-center gap-6">
              <motion.button
                onClick={() => dispatch(addToCart({ data }))}
                whileTap={{ scale: 0.8 }}
                className="text-md h-9 w-28 cursor-pointer rounded-md border-solid border-slate-900 bg-orange-500 font-semibold text-white shadow-lg transition-all duration-100 ease-in-out"
              >
                {data.price} $
              </motion.button>
              <Link to={'/review'}>
                <motion.button
                  onClick={() => dispatch(addToReview({ data }))}
                  whileTap={{ scale: 0.8 }}
                  className="text-md h-9 w-24 cursor-pointer rounded-md border-solid border-slate-900 bg-green-900 font-semibold text-white shadow-lg transition-all duration-100 ease-in-out"
                >
                  ReView
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="  mt-3 w-full">
        <div className=" mb-7 flex ">
          <div className="right-0 mx-auto flex h-10 gap-3">
            <input
              onChange={handleChange}
              type={'search'}
              className="text-md my-auto  h-7 w-72 rounded-md border border-orange-400 p-3 text-violet-700 hover:border-red-800 focus:border-red-800"
              placeholder="Hãy tìm kiếm đồ đẹp..."
            />
          </div>
        </div>
        <div>
          <div className="flex h-[1200px] w-full flex-wrap gap-14">
            {dataS.map((data: any) => (
              <div key={data.id} className="mt-5">
                <div className="  h-[540px] w-80 cursor-pointer rounded-md border border-solid bg-lime-50 px-4 pb-6 shadow-md  hover:shadow-2xl">
                  <p className="tSSext-red-600 mt-4 h-[60px] text-center text-xl font-medium">
                    {data.title}.
                  </p>
                  <div className="flex items-center justify-center">
                    <Link to={'/review'}>
                      <img
                        onClick={() =>
                          dispatch(addToReview({ data }))
                        }
                        className="h-64 w-60 rounded-md object-cover shadow-md"
                        src={data.Url}
                        alt="cr7"
                      />
                    </Link>
                  </div>
                  <p className="mt-3 text-center">
                    {data.description}.
                  </p>
                  <div className="flex items-center justify-center gap-6">
                    <motion.button
                      onClick={() => dispatch(addToCart({ data }))}
                      whileTap={{ scale: 0.8 }}
                      className=" text-md h-9 w-32 cursor-pointer rounded-md border-solid border-slate-900 bg-orange-500 font-semibold text-white shadow-lg transition-all duration-100 ease-in-out"
                    >
                      {data.price} $
                    </motion.button>
                    <Link to="/review">
                      <motion.button
                        onClick={() =>
                          dispatch(addToReview({ data }))
                        }
                        whileTap={{ scale: 0.8 }}
                        className="text-md h-9 w-32 cursor-pointer rounded-md border-solid border-slate-900 bg-green-900 font-semibold text-white shadow-lg transition-all duration-100 ease-in-out"
                      >
                        ReView
                        <AiOutlineShoppingCart className="my-auto" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
  );
};

export default Category;
