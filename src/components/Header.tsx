import Logo from '../assets/LogoCr7.png';
import { GiBasket } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store';
import { removeToUser } from '@/feature/userSlide';
import { useEffect, useRef, useState } from 'react';
import './Header.css';

type Props = {};

const Header = (props: Props) => {
  const datacart = useAppSelector((state) => state.cart.items);
  const dataUser = useAppSelector((state) => state.user.users);
  const [checkUse, setCheckUse] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  // const [input, setInput] = useState(false);
  // const [value, setValue] = useState('kha');

  const dispatch = useAppDispatch();
  const userRef = useRef<any>();
  const menuRef = useRef<any>();
  const myArrayWithNoDuplicates = datacart.reduce(
    (accumulator: any, currentValue) => {
      if (!accumulator.includes(currentValue)) {
        return [...accumulator, currentValue.data];
      }

      return accumulator.data;
    },
    []
  );

  const checkAdim = Number(
    dataUser.map((data) => data.data.admin).toString()
  );

  useEffect(() => {
    if (checkAdim == 1) {
      setCheckUse(true);
    } else if (checkAdim == 0) {
      setCheckUse(false);
    }
  }, [dataUser, checkUse]);

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (
        e.target !== userRef.current &&
        e.target !== menuRef.current
      ) {
        setIsMenu(false);
      }
    });
  }, []);

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
    setIsMenu(false);
  };

  const handleClikMenu = () => {
    setTimeout(() => {
      setIsMenu(!isMenu);
    }, 300);
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
          className="flex items-center justify-between gap-8  text-lg "
        >
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive
                ? 'flex h-[80px] w-36 items-center justify-center bg-orange-800  text-white hover:text-xl hover:text-black'
                : 'text-black hover:text-xl hover:text-red-500'
            }
          >
            <p className="my-auto ">Trang chủ</p>
          </NavLink>
          <NavLink
            to={'/Product'}
            className={({ isActive }) =>
              isActive
                ? 'flex h-[80px] w-36 items-center justify-center bg-orange-800   text-white hover:text-xl hover:text-black'
                : 'text-black hover:text-xl hover:text-red-500'
            }
          >
            <p className="my-auto">Sản phẩm</p>
          </NavLink>
        </motion.div>
        {/* {input ? (
          <div>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            // edit
            <button
              onClick={() => {
                setInput(!input);
              }}
            >
              dsa
            </button>
          </div>
        ) : (
          <div>
            <p>{value}</p>
            <button
              onClick={() => {
                setInput(!input);
              }}
            >
              sads
            </button>
          </div>
        )} */}
        <div>
          <div className="flex items-center justify-between gap-3">
            {dataUser.length === 0 ? (
              <NavLink to={'/login'}>
                <p className="my-auto mb-0 mt-0 text-lg  hover:text-red-500">
                  Đăng nhập
                </p>
              </NavLink>
            ) : (
              <div className="flex items-center justify-center gap-5">
                <div>
                  {dataUser.map((data) => (
                    <p
                      ref={userRef}
                      onClick={handleClikMenu}
                      key={data.data.email}
                      className=" mx-auto mt-0 mb-0 text-lg hover:text-red-500"
                    >
                      hi: {data.data.name}
                    </p>
                  ))}
                </div>
                {isMenu && (
                  <div
                    ref={menuRef}
                    className="absolute right-[310px] top-16  w-[260px]  rounded-xl bg-slate-200 p-7 shadow-lg"
                  >
                    <div className="gap-5">
                      <Link to={'/profile'}>
                        <p className="text-lg font-normal">
                          Profile.
                        </p>
                      </Link>
                      {checkUse && (
                        <Link to={'/productmanagement'}>
                          <p className="text-lg font-normal">
                            Quản lý sản phẩm.
                          </p>
                        </Link>
                      )}
                    </div>
                    <div className=" flex items-center justify-center  border-x-0 border-b-0 border-solid border-t-red-900">
                      <NavLink to={'/'}>
                        <button
                          onClick={handleDX}
                          className=" text-md relative m-2 mt-4 flex h-10 w-28  cursor-pointer  items-center justify-center gap-1 rounded-md border-solid border-gray-700 bg-green-900 text-white transition-all duration-100 ease-in-out hover:bg-teal-700 hover:text-gray-200"
                        >
                          Đăng Xuất
                        </button>
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
            )}

            <NavLink
              to={'/Cart'}
              className={({ isActive }) =>
                isActive
                  ? 'text-md relative flex h-10 w-28  cursor-pointer  items-center justify-center gap-1 rounded-md border-solid border-gray-700 bg-orange-800 text-white transition-all duration-100 ease-in-out hover:bg-teal-700 hover:text-gray-200'
                  : 'text-md relative flex h-10 w-28  cursor-pointer  items-center justify-center gap-1 rounded-md border-solid border-gray-700 bg-green-900 text-white transition-all duration-100 ease-in-out hover:bg-orange-800 hover:text-gray-200'
              }
            >
              Giỏ <GiBasket />
              <span className="align absolute -mt-4 ml-14 h-5 w-5  rounded-full bg-white text-center text-sm   text-red-600">
                {lenghtCart}
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
