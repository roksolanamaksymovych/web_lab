import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './homepage/header/Header';
import Footer from './homepage/footer/Footer';
import CatalogPage from './homepage/catalog/Catalog';
import ProductList from './homepage/productlist/ProductList';
import ProductDetail from './homepage/productdetail/ProductDetail';
import Loader from './homepage/loader/Loader'; 
import './homepage/header/Header.css'; 
import './homepage/footer/Footer.css'; 
import './homepage/productlist/ProductList.css'; 
import './homepage/productitem/ProductItem.css';
import './homepage/catalog/Catalog.css';
import './homepage/productdetail/ProductDetail.css';
import './homepage/search/Search.css'; 
import store from './homepage/redux/store';
import './App.css';
import Cart from './homepage/cart/cart';
import { Provider, useDispatch } from 'react-redux';
import { setCart } from '../src/homepage/redux/actions';
import Checkout from './homepage/checkoutpage/checkout';
import SuccessPage from './homepage/Success/Success';
import './homepage/loader/Loader.css';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')); 
    if (savedCart) {
      
      dispatch(setCart(savedCart));
    }
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/success' element={<SuccessPage/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;
