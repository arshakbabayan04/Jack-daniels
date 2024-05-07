import Navigation from "../navigation/Navigation";
import logo from '../../icons/logo.svg';
import facebook from '../../icons/social/facebook.svg';
import instagram from '../../icons/social/instagram.svg';
import twitter from '../../icons/social/twitter.svg';
import youtube from '../../icons/social/youtube.svg';

import './footer.scss';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer_wrapper">
                    <div className="footer_logo_block">
                        <img src={logo} alt="Logo" />
                        <div className="footer_logo_block_text">LIVE FREELY. DRINK RESPONSIBLY.</div>
                    </div>
                    <Navigation/>
                    <div className="footer_social_block">
                        <div className="footer_social_icon">
                            <img src={facebook} alt="facebook" />
                        </div>
                        <div className="footer_social_icon">
                            <img src={instagram} alt="instagram" />
                        </div>
                        <div className="footer_social_icon">
                            <img src={twitter} alt="twitter" />
                        </div>
                        <div className="footer_social_icon">
                            <img src={youtube} alt="youtube" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;