import React from 'react';
import './ProductItem.css';

const ProductItem = ({ title, description, imageSrc }) => {
    return (
        <div className="product-item">
            <div className="product-image">
                <img src={imageSrc} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ProductItem;
