import { useAppSelector } from '@/store';
import React from 'react';
import Header from './Header';

type Props = {};

const ProFile = (props: Props) => {
  const dataUser = useAppSelector((state) => state.user.users);
  console.log(dataUser);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div>
          <p>Thông tin cá nhân: </p>
        </div>
        <div>
          {dataUser.map((data) => (
            <div>
              <p>
                email: <span>{data.data.email}</span>
              </p>
              <p>
                Họ và tên: <span>{data.data.name}</span>
              </p>
              <p>
                password: <span>{data.data.password}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProFile;
