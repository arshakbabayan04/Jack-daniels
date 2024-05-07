import './history.scss';

const History = () => {
    return ( 
        <section className="history">
            <div className="container">
                <div className="history_wrapper">
                    <h2 className="history_header">
                        Jack Daniel's: A History <br/> of Taste and Freedom
                    </h2>
                    <p className="history_descr">
                        Since 1866, Jack Daniel's has evolved from a mere idea in Lynchburg, Tennessee, into a living symbol of authentic whiskey. Every drop echoes centuries, offering a journey through time—rooted in heritage, embraced by innovation. Emerging resilient from prohibition, each sip encapsulates a piece of that era's soul.
                    </p>
                    <button className="history_btn">To learn more</button>
                    <div className="history_drop_legend"></div>
                    <div className="history_drop_1866"></div>
                </div>
            </div>
        </section>
    );
}
 
export default History;