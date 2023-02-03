import { addToCart } from '@/feature/cartSlide';
import { addToReview } from '@/feature/reviewSlide';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { dataApi } from '../../fectApi';
import { motion } from 'framer-motion';
import { Link as Links } from 'react-scroll';

type Props = {};

const RelatedProducts = (props: Props) => {
  const dispatch = useAppDispatch();
  const dataReview = useAppSelector((state) => state.review.items);
  const re = dataReview.map((data) => data.data.Category).toString();
  const reId = Number(
    dataReview.map((data) => data.data.id).toString()
  );

  const checkDataReview = dataApi.filter((data, index) => {
    if (data.Category == re && data.id != reId) {
      return data;
    }
  });

  const data = checkDataReview.filter((data, index) => {
    if (index < 4) {
      return data;
    }
  });

  const sCrollTop = (data: any) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(addToReview({ data }));
  };

  return (
    <div>
      <div>
        <div className="mx-auto w-[77%]">
          <div className="flex h-16  w-full items-center  justify-between gap-5 rounded-xl bg-orange-200 px-3 text-xl font-normal">
            <div className="flex items-center justify-center gap-3">
              <AiFillStar className="my-auto" />
              <p className="my-auto mt-0 mb-0">
                Các sản phẩm liên quan.
              </p>
            </div>
            <Link to={'/product'}>
              <div className="flex cursor-pointer items-center justify-center gap-3 hover:text-red-700">
                <p className="my-auto mt-0 mb-0">
                  Xem tất cả sản phẩm
                </p>
                <BsFillArrowRightSquareFill className="my-auto" />
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-between">
            {data.map((data: any) => (
              <div key={data.id} className="mt-5">
                <div className="h-[550px] w-80 rounded-md border  border-solid bg-lime-50 px-4 pb-6 shadow-lg  hover:shadow-2xl">
                  <p className="mt-4 h-[60px] w-full text-center text-xl font-medium text-red-600">
                    {data.title}.
                  </p>
                  <div className="flex items-center justify-center">
                    <Link to={'/review'}>
                      <img
                        onClick={() => sCrollTop(data)}
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
    </div>
  );
};

export default RelatedProducts;
