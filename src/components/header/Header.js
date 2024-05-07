import { useEffect } from 'react';
import Navigation from '../navigation/Navigation';
import logo from '../../icons/logo.svg';
import title from '../../img/title-jack-daniels.svg';
import bottle from '../../img/bottle.png';
import Aos from 'aos';
import './header.scss';

const Header = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return ( 
        <header className='header'>
            <div className="container">
                <div className="header_nav" data-aos="fade-down">
                    <div className="header_logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <Navigation/>
                    <button className="header_btn">
                        Buy
                    </button>
                </div>
                <div className='header_img'>
                    <img src={title} alt="Header Title" />
                </div>
            </div>
            <div className="bottle">
                <img src={bottle} alt="bottle"/>
            </div>
        </header> 
    );
}
 
export default Header;