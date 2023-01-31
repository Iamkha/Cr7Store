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
    <div className="h-screen bg-slate-100">
      <Header />
      <div>
        <div className="mx-auto mt-20 w-[80%]">
          <div>Danh sách sản phẩm:</div>
          <div className="flex justify-end">
            <div className="flex w-[80%] items-center justify-between ">
              <p>Sản phẩm</p>
              <p>Đơn giá</p>
              <p>Số lượng</p>
              <p>Tổng tiền</p>
              <p>Thao tác</p>
            </div>
          </div>
          {Datacart.map((data: any, index: number) => (
            <div key={index} className="mt-3">
              <div className="flex">
                <input
                  type={'checkbox'}
                  className="cursor-pointer"
                  checked={data.data.checkbox}
                  onChange={() => handleCheckInput(data.data)}
                />
                <img
                  src={data.data.Url}
                  alt="Cr7 Store"
                  className="ml-6 h-24 w-20 rounded-md object-cover"
                />
                <p className=" my-auto ml-44 w-64">
                  {data.data.title}
                </p>
                <p className="my-auto ml-10 w-64">
                  {data.data.price} $
                </p>
                <div className=" mr-20  ml-3 flex items-center justify-center gap-5">
                  <button
                    onClick={() => {
                      handleQTVT(data.data);
                    }}
                    className="text-md m-0 h-7 w-7 cursor-pointer p-0 text-center"
                  >
                    -
                  </button>

                  <p>{data.data.qty}</p>
                  <button
                    onClick={() => {
                      handleQTVP(data.data);
                    }}
                    className="text-md m-0 h-7 w-7 cursor-pointer p-0 text-center"
                  >
                    +
                  </button>
                </div>
                <p className="my-auto ml-28 w-64">
                  {data.data.qty * data.data.price} $
                </p>
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  className=" my-auto ml-9 h-10 w-16 cursor-pointer rounded-md bg-orange-900 text-lg   font-normal text-white hover:bg-orange-600"
                  onClick={() => {
                    handleRemove(data.data);
                  }}
                >
                  Xoá
                </motion.button>
              </div>
            </div>
          ))}
          <div className="mt-16 flex justify-end">
            <div className=" flex gap-10">
              <p>Tổng tiền tất cả sản phẩm:</p>
              <p>{sumWithInitial}$</p>
            </div>
          </div>
          <div className="mt-7 flex justify-end">
            <div className=" flex gap-10">
              <p>
                Tổng tiền phải thanh toán các sản phẩm bạn đã chọn:
              </p>
              <p>{Pay} $</p>
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
