import React from 'react';

const ProductItem = ({ title, description, price, volume, imageSrc }) => {
    return (
        <div className="product-item">
            <img src={imageSrc} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>Volume: {volume}ml</p>
        </div>
    );
};

export default ProductItem;
