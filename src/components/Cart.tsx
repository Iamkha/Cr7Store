import Header from './Header';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store';
import {
  decreaseCart,
  removeCartAll,
  increaseCart,
  Purchase,
} from '@/feature/cartSlide';
import { removeCart } from '@/feature/cartSlide';

type Props = {};

const Cart = (props: Props) => {
  const Datacart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const initialValue = 0;
  const sumWithInitial = Datacart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.data.qty * currentValue.data.price,
    initialValue
  );

  const sum = 0;
  const totalAmountPayable = Datacart.reduce(
    (accumulator: any, currentValue: any) => {
      if (currentValue.data.checkbox === true) {
        accumulator.push(currentValue);
      }
      return accumulator;
    },
    []
  );
  const Pay = totalAmountPayable.reduce(
    (accumulator: any, currentValue: any) =>
      accumulator + currentValue.data.qty * currentValue.data.price,
    sum
  );
  console.log(totalAmountPayable);

  const handleRemove = (data: any) => {
    dispatch(removeCart({ data }));
  };

  const handleRemoveAll = () => {
    dispatch(removeCartAll());
  };

  const handleQTVT = (data: any) => {
    dispatch(decreaseCart({ data }));
  };

  const handleQTVP = (data: any) => {
    dispatch(increaseCart({ data }));
  };

  const handleCheckInput = (data: any) => {
    dispatch(Purchase({ data }));
  };

  return (
    <div className=" bg-slate-100">
      <Header />
      <div>
        <div className="mx-auto mt-7  w-[80%]  pb-20">
          <div>Danh sách sản phẩm:</div>
          <div className="flex justify-center">
            <ul className="flex w-[70%] items-center justify-between ">
              <li>Sản phẩm</li>
              <li>Đơn giá</li>
              <li>Số lượng</li>
              <li>Tổng tiền</li>
            </ul>
          </div>
          {Datacart.map((data: any, index: number) => (
            <div key={index} className="mt-3">
              <ul className="-ml-16 flex items-center justify-center">
                <li>
                  <input
                    type={'checkbox'}
                    className="cursor-pointer"
                    checked={data.data.checkbox}
                    onChange={() => handleCheckInput(data.data)}
                  />
                </li>
                <li>
                  <img
                    src={data.data.Url}
                    alt="Cr7 Store"
                    className="ml-16 mr-3 h-24 w-20 rounded-md object-cover"
                  />
                </li>
                <li>
                  <p className=" my-auto ml-32 w-72">
                    {data.data.title}
                  </p>
                </li>
                <li>
                  <p className="my-auto ml-10 w-72">
                    {data.data.price} $
                  </p>
                </li>
                <li>
                  <div className=" mr-20  ml-5 flex items-center justify-center gap-5">
                    <button
                      onClick={() => {
                        handleQTVT(data.data);
                      }}
                      className="text-md m-0  h-7 w-7 cursor-pointer border border-gray-900 p-0 text-center font-semibold"
                    >
                      -
                    </button>

                    <p className="my-auto mt-0 mb-0 w-10 text-center ">
                      {data.data.qty}
                    </p>

                    <button
                      onClick={() => {
                        handleQTVP(data.data);
                      }}
                      className="text-md m-0  h-7 w-7 cursor-pointer border border-gray-900 p-0 text-center font-semibold"
                    >
                      +
                    </button>
                  </div>
                </li>
                <li>
                  <p className="my-auto ml-12 w-60">
                    {data.data.qty * data.data.price} $
                  </p>
                </li>
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  className=" my-auto ml-7 h-10 w-16 cursor-pointer rounded-md bg-orange-900 text-lg   font-normal text-white hover:bg-orange-600"
                  onClick={() => {
                    handleRemove(data.data);
                  }}
                >
                  Xoá
                </motion.button>
              </ul>
            </div>
          ))}
          <div className="mt-7 flex justify-end">
            <div className=" flex gap-10">
              <p>Tổng tiền tất cả sản phẩm:</p>
              <p className="w-40">{sumWithInitial}$</p>
            </div>
          </div>
          <div className="mt-7 flex justify-end">
            <div className=" flex gap-10">
              <p>
                Tổng tiền phải thanh toán các sản phẩm bạn đã chọn:
              </p>
              <p className="w-40">{Pay} $</p>
            </div>
          </div>
          <div className="mt-7 flex justify-end">
            <motion.button
              onClick={() => handleRemoveAll()}
              whileTap={{ scale: 0.8 }}
              className="h-11 w-40 cursor-pointer rounded-xl bg-slate-300 text-lg font-semibold text-indigo-700 hover:bg-red-100 hover:text-indigo-600 "
            >
              Clear All
            </motion.button>
            <Link to="/Payment">
              <motion.button
                whileTap={{ scale: 0.8 }}
                className="  ml-7 h-11 w-40 cursor-pointer rounded-xl bg-slate-300 text-lg font-semibold text-indigo-700 hover:bg-red-100 hover:text-indigo-600 "
              >
                Thanh toán
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
