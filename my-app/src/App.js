import React from 'react';
import Header from './homepage/header/Header';
import Footer from './homepage/footer/Footer';
import ProductList from './homepage/productlist/ProductList';
import './homepage/header/Header.css'; 
import './homepage/footer/Footer.css'; 
import './homepage/productlist/ProductList.css'; 
import './homepage/productitem/ProductItem.css'
import './App.css';


function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <ProductList />
            </main>
            <Footer />
        </div>
    );
}

export default App;
