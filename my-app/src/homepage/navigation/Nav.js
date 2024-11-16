import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/cart">Cart</Link>
        </nav>
    );
};

export default Nav;
