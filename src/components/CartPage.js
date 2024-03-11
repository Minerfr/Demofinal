// src/components/CartPage.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './HomePage.css'; // Import the CSS file

const CartPage = () => {
 const { cart, removeAllFromCart, images } = useContext(CartContext);
 const navigate = useNavigate();

 // Calculate the total price of all items in the cart
 const totalPrice = cart.reduce((total, item) => total + item.price, 0);

 const handleBuyAll = () => {
    removeAllFromCart();
    navigate('/'); // Redirect back to home page
 };

 return (
    <div>
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <img src={item.src} alt={item.alt} />
          <p>Price: ${item.price}</p>
        </div>
      ))}
      <p>Total Price: ${totalPrice}</p> {/* Display the total price */}
      <button className="buy-button" onClick={handleBuyAll}>Pay</button> {/* Pay button */}
      <button className="buy-button" onClick={() => navigate('/')}>Back</button> {/* Back button */}
    </div>
 );
};

export default CartPage;
