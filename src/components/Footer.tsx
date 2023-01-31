import React from 'react';
import { AiFillPhone, AiTwotoneMail } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import Logo from '../assets/LogoCr7.png';
import LogoFooter from '../assets/LogoFooter.jpg';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-violet-200">
      <div className=" mx-auto  mt-0 flex h-full w-[80%] justify-between border-t-2">
        <div className="w-1/3">
          <div className="mt-3 flex w-44 justify-between gap-2">
            <img src={Logo} className="h-auto w-10" alt="Logo" />
            <span className="flex items-center justify-center text-xl font-medium ">
              Cr7 Store
            </span>
          </div>
          <div>
            <p className="mt-1">
              - Hãy đến với chúng tôi để có những OutFiz đơn giản mà
              đầy chất lượng.
            </p>
            <p className="flex  items-center gap-2 ">
              <AiFillPhone /> Tư vấn hỗ trợ:
              <span className="text-red-600">0862510104.</span>
            </p>
            <p className="flex items-center gap-2">
              <AiTwotoneMail /> Email:
              <span className="text-green-800">
                Phuockha2852001@gmail.com
              </span>
            </p>
            <p className="flex items-center gap-2">
              <BiTime /> Hỗ trợ 24/7.
            </p>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-lg font-semibold">- Thông tin thêm:</p>
          <div className="text-textColor cursor-pointer font-medium">
            <p>1. Giới thiệu.</p>
            <p>2. Hướng dẫn sử dụng.</p>
            <p>3. Điều Khoảng sử dụng. </p>
            <p>4. Giới thiệu nhận quà. </p>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-lg font-semibold lg:text-xl">
            - PHẦN MỀM QUẢN LÝ BÁN HÀNG CR7 STORE.
          </p>
          <p className="text-DarkGreen mt-2">
            Trụ sở: 146 Tôn Thất Bách, Hương Vân, Hương Trà, Thừa
            Thiên Huế.
          </p>
          <div className="lg:w-300 mt-3 flex items-center justify-between gap-2 lg:ml-28">
            <img
              src={LogoFooter}
              className="w-40 rounded-2xl shadow-md"
              alt="shop"
            />
            <p>- Oder liền tay, nhanh tay nhận quà.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
