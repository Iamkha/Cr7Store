import React from 'react';
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { dataApi } from '../../fectApi';
import { Link } from 'react-router-dom';
import { addToCart } from '@/feature/cartSlide';
import { useAppDispatch } from '@/store';

const LatestProduct = () => {
  const dispatch = useAppDispatch();
  const BigData = dataApi.reduce((ar1: any, ar2) => {
    if (ar1.length < 4) {
      ar1.push(ar2);
    }
    return ar1;
  }, []);

  return (
    <div>
      <div className="mx-auto w-[77%]">
        <div className="flex  w-full justify-center gap-5 rounded-xl bg-orange-200 text-xl font-normal">
          <AiFillStar className="my-auto" />
          <p>Sản Phẩm mới nhất.</p>
        </div>
        <div className="flex items-center justify-between">
          {BigData.map((data: any) => (
            <div key={data.id} className="mt-5">
              <div className="pb w-72  rounded-md border border-solid bg-lime-50 px-4 pb-6 shadow-lg  hover:shadow-2xl">
                <p className="text-center text-xl font-medium text-red-600">
                  {data.title}.
                </p>
                <div className="flex items-center justify-center">
                  <Link to="/review">
                    <img
                      className="h-64 w-60 rounded-md object-cover shadow-md"
                      src={data.Url}
                      alt="cr7"
                    />
                  </Link>
                </div>
                <p className="text-center">{data.description}.</p>
                <div className="flex items-center justify-center gap-6">
                  <motion.button
                    onClick={() => dispatch(addToCart({ data }))}
                    whileTap={{ scale: 0.8 }}
                    className=" h-9 w-32 cursor-pointer rounded-md bg-orange-500 text-xl font-semibold text-white shadow-lg transition-all duration-100 ease-in-out"
                  >
                    {data.price} $
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    className="h-9 w-32 cursor-pointer rounded-md bg-green-900 text-xl font-semibold text-white shadow-lg transition-all duration-100 ease-in-out"
                  >
                    ReView
                    <AiOutlineShoppingCart className="my-auto" />
                  </motion.button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
