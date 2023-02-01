import React from 'react';
import { motion } from 'framer-motion';
import { dataApi } from '../../fectApi';
import { Link } from 'react-router-dom';
import { addToCart } from '@/feature/cartSlide';
import { useAppDispatch } from '@/store';
import { addToReview } from '@/feature/reviewSlide';

type Props = {};

const TopProduct = (props: Props) => {
  const dispatch = useAppDispatch();
  const data = dataApi.reduce((ar1, ar2) => {
    if (Number(ar1.Qty) > Number(ar2.Qty)) {
      return ar1;
    } else {
      return ar2;
    }
  });

  return (
    <div>
      <div className="rounded-xl border-solid bg-amber-50 p-8  shadow-lg  hover:shadow-2xl ">
        <p className="text-center text-2xl font-normal text-violet-900 ">
          Bán chạy nhất Shop.
        </p>
        <Link to={'/review'}>
          <img
            onClick={() => dispatch(addToReview({ data }))}
            src={data.Url}
            alt="cr7"
            className="w-96 cursor-pointer rounded-xl shadow-md "
          />
        </Link>
        <p className="mt-3 text-center text-xl font-normal text-red-600">
          {data.title}.
        </p>
        <div className="flex items-center justify-center gap-6">
          <motion.button
            onClick={() => dispatch(addToCart({ data }))}
            whileTap={{ scale: 0.8 }}
            className="text-md h-9 w-32 cursor-pointer rounded-md border-solid border-slate-900 bg-orange-500 font-semibold text-white shadow-lg transition-all duration-100 ease-in-out"
          >
            {data.price} $
          </motion.button>
          <Link to={'/review'}>
            <motion.button
              onClick={() => dispatch(addToReview({ data }))}
              whileTap={{ scale: 0.8 }}
              className="text-md h-9 w-32 cursor-pointer rounded-md border-solid border-slate-900 bg-green-900 font-semibold text-white shadow-lg transition-all duration-100 ease-in-out"
            >
              ReView
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
