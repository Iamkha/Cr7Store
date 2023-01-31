import React from 'react';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import Category from './pages/Category';

type Props = {};

const Product = (props: Props) => {
  return (
    <div>
      <Header />
      <Container />

      <div className="mt-20  bg-slate-100 p-10">
        <div className="mx-auto w-[80%]">
          <Category />
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Product;
