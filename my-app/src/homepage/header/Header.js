import React from 'react';
import './Header.css';
import Nav from '../navigation/Nav';


const Header = () => {
    return (
        <header className="header">
            <div className="logo">Paradise</div>
            <Nav />
        </header>
    );
};

export default Header;
