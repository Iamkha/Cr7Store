import React from 'react';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import SimpleSlider from './Librarian/Slider';
import LatestProduct from './pages/LatestProduct';
import ProductPricesGood from './pages/ProductPricesGood';
import TopProduct from './pages/TopProduct';

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Header />
      <Container />

      <div className="mt-20 bg-slate-100 p-10">
        <div className="flex items-center justify-center gap-14">
          <SimpleSlider />
          <TopProduct />
        </div>
        <div className="mt-20 ">
          <ProductPricesGood />
        </div>
        <div className="mt-20">
          <LatestProduct />
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
