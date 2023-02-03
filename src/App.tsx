import Container from './components/Container';
import Header from './components/Header';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Product from './components/Product';
import Login from './components/Login';
import Logout from './components/Logout';
import Review from './components/Review';
import Payment from './components/Payment';
import ProFile from './components/ProFile';
import ProductManagement from './components/ProductManagement';
import AddCart from './components/AddCart';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/review" element={<Review />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/profile" element={<ProFile />} />
        <Route path="/addcart" element={<AddCart />} />
        <Route path="/editcart" element={<AddCart />} />
        <Route
          path="/productmanagement"
          element={<ProductManagement />}
        />
      </Routes>
    </div>
  );
}

export default App;
