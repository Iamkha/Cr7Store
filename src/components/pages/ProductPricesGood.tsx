import React from 'react';
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { dataApi } from '../../fectApi';
import { Link } from 'react-router-dom';
import { addToCart } from '@/feature/cartSlide';
import { useAppDispatch } from '@/store';
import { addToReview } from '@/feature/reviewSlide';

type Props = {};
const ProductPricesGood = () => {
  const dispatch = useAppDispatch();
  const BigData = dataApi.reduce((ar1: any, ar2) => {
    if (ar2.price < 50000 && ar1.length < 4) {
      ar1.push(ar2);
    }
    return ar1;
  }, []);

  return (
    <div>
      <div className="mx-auto w-[77%]">
        <div className="flex  h-16 w-full  items-center justify-center gap-5 rounded-xl bg-orange-200 text-xl font-normal">
          <AiFillStar className="my-auto" />
          <p className="my-auto mt-0 mb-0">Sản Phẩm mới nhất.</p>
        </div>
        <div className="flex items-center justify-between">
          {BigData.map((data: any) => (
            <div key={data.id} className="mt-5">
              <div className="h-[550px] w-80 rounded-md border  border-solid bg-lime-50 px-4 pb-6 shadow-lg  hover:shadow-2xl">
                <p className="mt-4 h-[60px] w-full text-center text-xl font-medium text-red-600">
                  {data.title}.
                </p>
                <div className="flex items-center justify-center">
                  <Link to={'/review'}>
                    <img
                      onClick={() => dispatch(addToReview({ data }))}
                      className="h-64 w-60 rounded-md object-cover shadow-md"
                      src={data.Url}
                      alt="cr7"
                    />
                  </Link>
                </div>
                <p className="mt-2 text-center">
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
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    onClick={() => dispatch(addToReview({ data }))}
                    className="text-md h-9  w-32 cursor-pointer rounded-md border-solid border-slate-900 bg-green-900 font-semibold text-white shadow-lg transition-all duration-100 ease-in-out"
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

export default ProductPricesGood;
