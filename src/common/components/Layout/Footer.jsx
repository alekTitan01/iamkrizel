import React from "react";
import { FooterContainer } from './styles';
import { Link } from 'react-router-dom';
import Icons from '../Icons';
import Tooltip from '../Tooltip';

const Footer = () => {
    return <FooterContainer>
        <div className='footer-location'>
            <span className='map'>
                <iframe title='address-map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16108.55682381236!2d11.359977686725735!3d44.461515143974694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snl!4v1690862337898!5m2!1sen!2snl" width="500" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </span>
            <span className='location'>Bologna City, Italy 40141</span>
        </div>
        <div className='footer-menu'>
            <Link to='/iamkrizel'>Home</Link>
            <Link to='/iamkrizel/about'>About</Link>
            <Link to='/iamkrizel/services'>Services</Link>
            <Link to='/iamkrizel/portfolio'>Portfolio</Link>
            <Link to='/iamkrizel/contacts'>Contacts</Link>
        </div>
        <div className='footer-social'>
            <div className='logos'>
                <span>Lets talk!</span>
                <div>
                    <Tooltip text='Facebook'>
                        <a href='https://www.facebook.com/' target='__blank'>
                            <Icons.FacebookIcon height='40px' width='40px' />
                        </a>
                    </Tooltip>
                    <Tooltip text='Instagram'>
                        <a href='https://www.instagram.com/' target='__blank'>
                            <Icons.InstagramIcon height='40px' width='40px' />
                        </a>
                    </Tooltip>
                    <Tooltip text='Twitter'>
                        <a href='https://twitter.com/' target='__blank'>
                            <Icons.TwitterIcon height='40px' width='40px' />
                        </a>
                    </Tooltip>
                    <Tooltip text='LinkedIn'>
                        <a href='https://www.linkedin.com/' target='__blank'>
                            <Icons.LinkedInIcon height='40px' width='40px' />
                        </a>
                    </Tooltip>
                </div>
            </div>
            <div className='email'>
                <span>Email me at</span>
                <a href="mailto: krizelmvirtualassistant@gmail.com">krizelmvirtualassistant@gmail.com</a>
            </div>
        </div>
    </FooterContainer>;
};

export default Footer;
