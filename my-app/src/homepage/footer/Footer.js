import React from 'react';
import './Footer.css';
import facebookIcon from '../../photo/facebook.svg'; 
import instagramIcon from '../../photo/instagram.svg'; 
import linkedinIcon from '../../photo/linkedin.svg'; 


const Footer = () => {
    return (
        <footer className="footer">
            <div className="branding">
                <div className="branding-title">Branding Stuff</div>
                <div className="branding-description">Perfumes are captivating blends of scents that evoke emotions and memories.</div>
            </div>
            <div className="logo">Paradise</div>
            <div className="social">
                <a href="#">
                    <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="#">
                    <img src={instagramIcon} alt="Instagram" />
                </a>
                <a href="#">
                    <img src={linkedinIcon} alt="LinkedIn" />
                </a>
            </div>
            <div className="divider"></div>
            <div className="company-info">2024 © All rights reserved, Perfume Brand</div>
        </footer>
    );
};

export default Footer;
