import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import './Catalog.css'; 
import ProductItem from '../productitem/ProductItem'; 
import PrimaryButton from '../primary/Primary';
import Search from '../search/Search'; 
import Select from '../select/Select';
import image1 from '../../photo/2.jpg'; 
import Filters from '../filter/Filter'; 




const allProducts = [
    { id: 1, title: 'Perfume 1', description: 'Perfumes are captivating blends of scents that evoke emotions and memories.', price: 50, volume: 30, imageSrc: image1 },
    { id: 2, title: 'Perfume 2', description: 'Wearing a signature scent can boost your confidence and leave a lasting impression.', price: 75, volume: 50, imageSrc: image1 },
    { id: 3, title: 'Perfume 3', description: 'Explore the world of perfumes to find the perfect aroma that resonates with you.', price: 120, volume: 100, imageSrc: image1 },
    { id: 4, title: 'Perfume 4', description: 'Experience a scent that embodies elegance and sophistication.', price: 200, volume: 150, imageSrc: image1 },
    { id: 5, title: 'Perfume 5', description: 'A fragrance that leaves a trail of mystery wherever you go.', price: 95, volume: 75, imageSrc: image1 },
    { id: 6, title: 'Perfume 6', description: 'An aromatic blend of floral and citrus notes for a fresh feel.', price: 65, volume: 40, imageSrc: image1 },
];

function CatalogPage() {
    const [filteredProducts, setFilteredProducts] = useState(allProducts);
    const [searchValue, setSearchValue] = useState('');

    const handleFilterChange = (filters) => {
        let filtered = allProducts;

        if (filters.price) {
            if (filters.price === '1') filtered = filtered.filter(product => product.price < 50);
            if (filters.price === '2') filtered = filtered.filter(product => product.price >= 50 && product.price <= 100);
            if (filters.price === '3') filtered = filtered.filter(product => product.price >= 100 && product.price <= 200);
            if (filters.price === '4') filtered = filtered.filter(product => product.price > 200);
        }

        if (filters.volume) {
            if (filters.volume === '1') filtered = filtered.filter(product => product.volume < 50);
            if (filters.volume === '2') filtered = filtered.filter(product => product.volume >= 50 && product.volume <= 100);
            if (filters.volume === '3') filtered = filtered.filter(product => product.volume >= 100 && product.volume <= 150);
            if (filters.volume === '4') filtered = filtered.filter(product => product.volume > 150);
        }

        if (filters.search) {
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                product.description.toLowerCase().includes(filters.search.toLowerCase())
            );
        }

        setFilteredProducts(filtered);
    };

    return (
        <div className="catalog-page">
            <h1>Catalog</h1>
            <Filters onFilterChange={handleFilterChange} />

            <div className="products-container">
                <div className="products">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.imageSrc} alt={product.title} className="product-image" />
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <p>Volume: {product.volume}ml</p>
                            <Link to={`/product/${product.id}`}>
                                <button className="more-button">More</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}







export default CatalogPage;
