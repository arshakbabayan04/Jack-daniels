import './whiskeyInfo.scss';

const WhiskeyInfo = () => {
    return ( 
        <section className="whiskey_info">
            <div className="container">
                <div className="whiskey_info_wrapper">
                    <div className="whiskey_info_content">
                        <div className="whiskey_info_item">
                            <div className="whiskey_info_title">Grain Selection</div>
                            <p className="whiskey_info_descr">
                                Carefully selected grain, the embodiment of our highest standards and traditions
                            </p>
                        </div>
                        <div className="whiskey_info_item">
                            <div className="whiskey_info_title">Distillation</div>
                            <p className="whiskey_info_descr">
                                The process that gives whiskey its unique character and purity
                            </p>
                        </div>
                        <div className="whiskey_info_item">
                            <div className="whiskey_info_title">Charcoal Mellowing</div>
                            <p className="whiskey_info_descr">
                                A unique stage - a drop passes through a layer of maple, creating a special softness
                            
                            </p>
                        </div>
                    </div>
                    <div className="whiskey_info_content">
                        <div className="whiskey_info_item">
                            <div className="whiskey_info_title">Aging in Barrels</div>
                            <p className="whiskey_info_descr">
                                Time and patience in oak barrels for the whiskey to acquire its unique characteristics
                            </p>
                        </div>
                        <div className="whiskey_info_item">
                            <div className="whiskey_info_title">Bottling and Serving</div>
                            <p className="whiskey_info_descr">
                                The final stage when the whiskey is ready to give you a unique taste of true craftsmanship
                            </p>
                        </div>
                        <div className="whiskey_info_item">
                            <div className="whiskey_info_title">Perfection of Taste</div>
                            <p className="whiskey_info_descr">
                                The final stage - the whiskey is improved, preparing for your pleasure
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default WhiskeyInfo;