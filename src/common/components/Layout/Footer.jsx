import React from "react";
import { FooterContainer } from './styles';
import { Link } from 'react-router-dom';

const Footer = () => {
    return <FooterContainer>
        <div className='footer-location'>
            <span className='map'>
                <iframe title='address-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.2714168273933!2d125.0610239263853!3d6.2203414901850085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f79aeb63dfe9b1%3A0x655c3f15a563457f!2sPolomolok%20Municipal%20Hall!5e0!3m2!1sen!2sph!4v1690442594952!5m2!1sen!2sph" width="500" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </span>
            <span>address</span>
        </div>
        <div className='footer-menu'>
            <Link to='/iamkrizel'>Home</Link>
            <Link to='/iamkrizel/about'>About</Link>
            <Link to='/iamkrizel/services'>Services</Link>
            <Link to='/iamkrizel/portfolio'>Portfolio</Link>
            <Link to='/iamkrizel/contacts'>Contacts</Link>
        </div>
        <div className='footer-social'>
            <div>Social Media</div>
            <div>Contacts and Emails</div>
        </div>
    </FooterContainer>;
};

export default Footer;
