import React from 'react';
import Header from './Header';
import LogoConTen from '../assets/LogoConTen.png';

type Props = {};

const Payment = (props: Props) => {
  return (
    <div className="top-0 left-0 right-0 bottom-0 flex justify-between">
      <div className="h-[100vh] w-[50%] border-b-0 border-t-0  border-l-0  border-r border-solid">
        <div>
          <div className="flex w-40 items-center justify-between">
            <img src={LogoConTen} className="w-32" alt="cr7" />
            <span>Store</span>
          </div>
          <div>
            <p> Giỏ hàng = Thông tin giao hàng</p>
          </div>
          <div>
            <p>Thông tin giao hàng.</p>
            <input />
            <input />
            <input />
            <div>
              <div>
                <span>Giao hàng tận nơi.</span>
              </div>
              <div>
                <input />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;
