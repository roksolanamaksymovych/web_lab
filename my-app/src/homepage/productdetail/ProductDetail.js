import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import image1 from '../../photo/2.jpg';

const allProducts = [
    { id: 1, title: 'Perfume 1', description: 'Perfumes are captivating blends of scents that evoke emotions and memories.', price: 50, volume: 30, imageSrc: image1 },
    { id: 2, title: 'Perfume 2', description: 'Wearing a signature scent can boost your confidence and leave a lasting impression.', price: 75, volume: 50, imageSrc: image1 },
    { id: 3, title: 'Perfume 3', description: 'Explore the world of perfumes to find the perfect aroma that resonates with you.', price: 120, volume: 100, imageSrc: image1 },
    { id: 4, title: 'Perfume 4', description: 'Experience a scent that embodies elegance and sophistication.', price: 200, volume: 150, imageSrc: image1 },
    { id: 5, title: 'Perfume 5', description: 'A fragrance that leaves a trail of mystery wherever you go.', price: 95, volume: 75, imageSrc: image1 },
    { id: 6, title: 'Perfume 6', description: 'An aromatic blend of floral and citrus notes for a fresh feel.', price: 65, volume: 40, imageSrc: image1 },
];

function ProductDetail() {
    const { id } = useParams(); 
    const navigate = useNavigate(); 
    const [cart, setCart] = useState([]); 
    const [quantity, setQuantity] = useState(1); 
    const [packaging, setPackaging] = useState('Small'); 
    const product = allProducts.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleAddToCart = () => {

        const productWithOptions = { ...product, quantity, packaging };
        setCart([...cart, productWithOptions]); 
        alert(`${product.title} (x${quantity}, ${packaging}) added to cart`); 
    };

    return (
        <div className="product-detail">
            <img src={product.imageSrc} alt={product.title} className="product-image" />
            <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p className="price">Price: ${product.price}</p>
                <p className="volume">Volume: {product.volume}ml</p>
            </div>

            <div className="quantity-selector">
                <label htmlFor="quantity">Quantity: </label>
                <select 
                    id="quantity" 
                    value={quantity} 
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                >
                    {[...Array(10).keys()].map(i => (
                        <option key={i} value={i + 1}>{i + 1}</option>
                    ))}
                </select>
            </div>

            <div className="packaging-selector">
                <label htmlFor="packaging">Packaging: </label>
                <select 
                    id="packaging" 
                    value={packaging} 
                    onChange={(e) => setPackaging(e.target.value)}
                >
                    <option value="Small">Small (30ml)</option>
                    <option value="Medium">Medium (50ml)</option>
                    <option value="Large">Large (100ml)</option>
                    <option value="Extra Large">Extra Large (150ml)</option>
                </select>
            </div>

            <div className="button-container">
                <button onClick={() => navigate(-1)} className="back-button">Back</button>
                <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductDetail;
