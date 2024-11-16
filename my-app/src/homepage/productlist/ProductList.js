import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import ProductItem from '../productitem/ProductItem';
import './ProductList.css';
import image1 from '../../photo/2.jpg';
import image from '../../photo/7cfe1a056067c817dc5a4e9d307d97c0.jpg';

const ProductList = () => {
    const allProducts = [
        { id: 1, title: 'Perfume 1', description: 'Perfumes are captivating blends of scents that evoke emotions and memories.', price: 50, volume: 30, imageSrc: image1 },
        { id: 2, title: 'Perfume 2', description: 'Wearing a signature scent can boost your confidence and leave a lasting impression.', price: 75, volume: 50, imageSrc: image1 },
        { id: 3, title: 'Perfume 3', description: 'Explore the world of perfumes to find the perfect aroma that resonates with you.', price: 120, volume: 100, imageSrc: image1 },
        { id: 4, title: 'Perfume 4', description: 'Experience a scent that embodies elegance and sophistication.', price: 200, volume: 150, imageSrc: image1 },
        { id: 5, title: 'Perfume 5', description: 'A fragrance that leaves a trail of mystery wherever you go.', price: 95, volume: 75, imageSrc: image1 },
        { id: 6, title: 'Perfume 6', description: 'An aromatic blend of floral and citrus notes for a fresh feel.', price: 65, volume: 40, imageSrc: image1 },
    ];

    const [visibleProducts, setVisibleProducts] = useState(3);

    const handleViewMore = () => {
        setVisibleProducts(prevVisible => prevVisible + 3);
    };

    const handleBack = () => {
        setVisibleProducts(prevVisible => (prevVisible > 3 ? prevVisible - 3 : 3));
    };

    return (
        <section className="product-list">
            <div className="image-placeholder">
                <img src={image} alt="Your Image" />
            </div>
            <div className="text-container">
                <h2 className="main-heading">Find Your Unique Fragrance</h2>
                <p className="main-description">Step into a world of creativity and craftsmanship where each scent is a masterpiece. 
                    Our collection showcases the artistry of perfumers who transform nature’s finest ingredients into unforgettable fragrances.
                </p>
            </div>
            <div className="products-container">
                <div className="products">
                    {allProducts.slice(0, visibleProducts).map((product, index) => (
                        <div key={index} className="product-item">
                            <ProductItem {...product} />
                            <Link to={`/product/${product.id}`}>
                                <button className="more-button">More</button>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="buttons">
                    {visibleProducts > 3 && (
                        <button className="back" onClick={handleBack}>Back</button>
                    )}
                    {visibleProducts < allProducts.length && (
                        <button className="view-more" onClick={handleViewMore}>View more</button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProductList;
