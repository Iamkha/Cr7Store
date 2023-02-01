import Logo from '../assets/LogoCr7.png';
import { GiBasket } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store';
import { removeToUser } from '@/feature/userSlide';
import { useState } from 'react';

type Props = {};

const Header = (props: Props) => {
  const Datacart = useAppSelector((state) => state.cart.items);
  const DataUser = useAppSelector((state) => state.user.users);

  const dispatch = useAppDispatch();

  const myArrayWithNoDuplicates = Datacart.reduce(
    (accumulator: any, currentValue) => {
      if (!accumulator.includes(currentValue)) {
        return [...accumulator, currentValue.data];
      }

      return accumulator.data;
    },
    []
  );

  const data = myArrayWithNoDuplicates.reduce(
    (accumulator: any, currentValue: any) => {
      if (!accumulator.includes(currentValue)) {
        return [...accumulator, currentValue];
      }
      return accumulator;
    },
    []
  );

  const handleDX = () => {
    dispatch(removeToUser());
  };

  const lenghtCart: number = data.length;
  return (
    <div className="sticky top-0 bg-amber-300 ">
      <div className="mx-auto flex h-20 w-[80%] cursor-pointer items-center justify-between ">
        <Link
          to={'/'}
          className="h-70 flex items-center justify-between gap-3"
        >
          <img className="h-16 w-auto" src={Logo} />
          <span className="pointer-events-none text-2xl  font-semibold text-red-700 hover:text-red-500">
            Cr7 Store
          </span>
        </Link>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          exit={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center justify-between gap-8  text-lg  "
        >
          <NavLink
            to={'/'}
            className=" hover:text-xl hover:text-red-500"
          >
            Trang chủ
          </NavLink>
          <NavLink
            to={'/Product'}
            className="hover:text-xl hover:text-red-500"
          >
            Sản phẩm
          </NavLink>
        </motion.div>
        <div className="">
          <div className="flex items-center justify-between gap-8">
            {DataUser.length === 0 ? (
              <NavLink to={'/login'}>
                <p className="my-auto mb-0 mt-0 text-lg  hover:text-red-500">
                  Đăng nhập
                </p>
              </NavLink>
            ) : (
              <div className="flex items-center justify-center gap-7">
                <NavLink to={'/login'}>
                  {DataUser.map((data) => (
                    <p
                      key={data.data.email}
                      className=" text-lg hover:text-red-500"
                    >
                      hi: {data.data.name}
                    </p>
                  ))}
                </NavLink>
                <NavLink to={'/'}>
                  <button
                    onClick={handleDX}
                    className=" h-10 w-28 cursor-pointer items-center justify-center gap-1 rounded-md bg-green-900 text-lg text-white transition-all duration-100 ease-in-out hover:bg-teal-700 hover:text-gray-200"
                  >
                    Đăng Xuất
                  </button>
                </NavLink>
              </div>
            )}

            <NavLink to={'/Cart'}>
              <motion.button
                whileTap={{ scale: 0.8 }}
                className="relative flex h-10 w-28 cursor-pointer  items-center  justify-center gap-1 rounded-md border-solid border-gray-700 bg-green-900 text-lg text-white transition-all duration-100 ease-in-out hover:bg-teal-700 hover:text-gray-200"
              >
                Giỏ <GiBasket />
                <span className="align absolute -mt-4 ml-14 h-5 w-5  rounded-full bg-white text-center text-sm   text-red-600">
                  {lenghtCart}
                </span>
              </motion.button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
