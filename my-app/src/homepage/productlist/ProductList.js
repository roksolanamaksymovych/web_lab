import React from 'react';
import ProductItem from '../productitem/ProductItem';
import './ProductList.css';
import image1 from '../../photo/2.jpg'
import image from '../../photo/7cfe1a056067c817dc5a4e9d307d97c0.jpg';

const ProductList = () => {
    const products = [
        { title: 'Perfume 1', description: 'Perfumes are captivating blends of scents that evoke emotions and memories.', imageSrc: image1 },
        { title: 'Perfume 2', description: 'Wearing a signature scent can boost your confidence and leave a lasting impression.', imageSrc: image1 },
        { title: 'Perfume 3', description: 'Explore the world of perfumes to find the perfect aroma that resonates with you.', imageSrc: image1 },
    ];

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
                    {products.map((product, index) => (
                        <ProductItem key={index} {...product} />
                    ))}
                </div>
                <button className="view-more">View more</button>
            </div>
        </section>
    );
};

export default ProductList;
