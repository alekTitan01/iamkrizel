/* eslint-disable no-useless-computed-key */
import React from "react";
import { FooterContainer } from '../styles';
import { Link } from 'react-router-dom';
import Icons from '../../Icons';
import Tooltip from '../../Tooltip';
import Form from './Form';



const Footer = () => {
    return <FooterContainer id='footer'>
        <Form />
        <div className='footer-menu'>
            <Link to='/iamkrizel'>Home</Link>
            <Link to='/iamkrizel/about'>About</Link>
            <Link to='/iamkrizel/services'>Services</Link>
            <Link to='/iamkrizel/portfolio'>Portfolio</Link>
        </div>
        <div className='footer-social'>
            <div className='logos'>
                <span>Lets talk!</span>
                <div>
                    <Tooltip text='Facebook'>
                        <a href='https://www.facebook.com/' target='__blank'>
                            <Icons.FacebookIcon fill='#EAE9EE' height='40px' width='40px' />
                        </a>
                    </Tooltip>
                    <Tooltip text='Instagram'>
                        <a href='https://www.instagram.com/' target='__blank'>
                            <Icons.InstagramIcon fill='#EAE9EE' height='40px' width='40px' />
                        </a>
                    </Tooltip>
                    <Tooltip text='Twitter'>
                        <a href='https://twitter.com/' target='__blank'>
                            <Icons.TwitterIcon fill='#EAE9EE' height='40px' width='40px' />
                        </a>
                    </Tooltip>
                    <Tooltip text='LinkedIn'>
                        <a href='https://www.linkedin.com/' target='__blank'>
                            <Icons.LinkedInIcon fill='#EAE9EE' height='40px' width='40px' />
                        </a>
                    </Tooltip>
                </div>
            </div>
            <Link to='/iamkrizel'>
                <Icons.FacebookIcon fill='black' height='300px' width='300px' />
            </Link>
        </div>
    </FooterContainer>;
};

export default Footer;
