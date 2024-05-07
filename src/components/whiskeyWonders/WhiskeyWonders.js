import bottle_apple from '../../img/whiskey-list/bottle-apple.png';
import bottle_old from '../../img/whiskey-list/bottle_old.png';
import bottle_fire from '../../img/whiskey-list/bottle-fire.png';
import bottle_honey from '../../img/whiskey-list/bottle-honey.png';


import './whiskeyWonders.scss';

const WhiskeyWonders = () => {
    return ( 
        <section className="whiskey_wonders">
            <div className="container">
                <h2 className="whiskey_wonders_header">Whiskey Wonders</h2>
                <div className="whiskey_wonders_wrapper">
                    <div className="whiskey_wonders_item">
                        <img src={bottle_apple} alt="Whiskey" className="whiskey_wonders_img"/>
                        <div className="whiskey_wonders_title">Jack Daniel's <br/>Tennessee Apple</div>
                    </div>
                    <div className="whiskey_wonders_item">
                        <img src={bottle_old} alt="Whiskey" className="whiskey_wonders_img"/>
                        <div className="whiskey_wonders_title">Jack Daniel's <br/>Old No.7</div>   
                    </div>
                    <div className="whiskey_wonders_item">
                        <img src={bottle_fire} alt="Whiskey" className="whiskey_wonders_img"/>
                        <div className="whiskey_wonders_title">Jack Daniel's <br/>Tennessee Fire</div>
                    </div>
                    <div className="whiskey_wonders_item">
                        <img src={bottle_honey} alt="Whiskey" className="whiskey_wonders_img"/>
                        <div className="whiskey_wonders_title">Jack Daniel's <br/>Tennessee Honey</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default WhiskeyWonders;