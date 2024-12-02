import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCartItem } from '../redux/actions';
import { Link } from 'react-router-dom';
import './cart.css';

function Cart() {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();


  const saveCartToLocalStorage = (cart) => {
    if (cart && cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };


  useEffect(() => {
    saveCartToLocalStorage(cart); 
  }, [cart]); 


  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };


  const handleQuantityChange = (id, e) => {
    const quantity = parseInt(e.target.value);
    const item = cart.find(product => product.id === id);
    if (item && !isNaN(quantity) && quantity > 0) {
      const updatedItem = {
        ...item,
        quantity, 
        price: getPriceByPackaging(item, item.packaging) 
      };
      dispatch(updateCartItem(id, updatedItem)); 
    } else {
      console.error('Invalid quantity:', quantity);
    }
  };

 
  const handlePackagingChange = (id, e) => {
    const packaging = e.target.value;
    const item = cart.find(product => product.id === id);
    if (item) {
      const updatedPrice = getPriceByPackaging(item, packaging); 
      const updatedItem = {
        ...item,
        packaging, 
        price: updatedPrice 
      };
      dispatch(updateCartItem(id, updatedItem)); 
    }
  };

  
  const getPriceByPackaging = (product, packaging) => {
    if (!product || !product.price) {
      console.error('Invalid product or price:', product); 
      return 10; 
    }

    switch (packaging) {
      case 'Small':
        return product.price;
      case 'Medium':
        return product.price * 1.2;
      case 'Large':
        return product.price * 1.5;
      case 'Extra Large':
        return product.price * 2;
      default:
        return product.price;
    }
  };

  
const totalPrice = cart.reduce((total, item) => {
    console.log('item:', item);  
    if (!item.price || isNaN(item.price) || item.quantity <= 0) {
      console.error('Invalid price or quantity for item:', item); 
      return total;
    }
    const price = item.price * item.quantity; 
    console.log('price:', price);  
    return total + price;
  }, 0);
  console.log('totalPrice:', totalPrice);  
  

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageSrc} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <div className="quantity-selector">
                  <label htmlFor={`quantity-${item.id}`}>Quantity: </label>
                  <select 
                    id={`quantity-${item.id}`} 
                    value={item.quantity} 
                    onChange={(e) => handleQuantityChange(item.id, e)}
                  >
                    {[...Array(10).keys()].map(i => (
                      <option key={i} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                <div className="packaging-selector">
                  <label htmlFor={`packaging-${item.id}`}>Packaging: </label>
                  <select 
                    id={`packaging-${item.id}`} 
                    value={item.packaging} 
                    onChange={(e) => handlePackagingChange(item.id, e)}
                  >
                    <option value="Small">Small (30ml)</option>
                    <option value="Medium">Medium (50ml)</option>
                    <option value="Large">Large (100ml)</option>
                    <option value="Extra Large">Extra Large (150ml)</option>
                  </select>
                </div>
              </div>
              <button onClick={() => handleRemove(item.id)} className="remove-button">Remove</button>
            </div>
          ))}
        </div>
      )}

      <div className="cart-summary">
        <p>Total Price: ${totalPrice}</p>
        <div className="cart-actions">
          <Link to="/catalog">
            <button className="back-button">Back to Catalog</button>
          </Link>
          <Link to='/checkout'>
          <button className="checkout-button">Proceed to Checkout</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Cart;
