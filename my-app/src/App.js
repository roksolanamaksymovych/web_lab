import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './homepage/header/Header';
import Footer from './homepage/footer/Footer';
import CatalogPage from './homepage/catalog/Catalog';
import ProductList from './homepage/productlist/ProductList';
import ProductDetail from './homepage/productdetail/ProductDetail';
import './homepage/header/Header.css'; 
import './homepage/footer/Footer.css'; 
import './homepage/productlist/ProductList.css'; 
import './homepage/productitem/ProductItem.css';
import './homepage/catalog/Catalog.css';
import './homepage/productdetail/ProductDetail.css';
import './homepage/search/Search.css'; 

import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/catalog" element={<CatalogPage />} />
                        <Route path="/product/:id" element={<ProductDetail />} />  
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
