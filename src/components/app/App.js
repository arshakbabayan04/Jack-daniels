import Footer from "../footer/Footer";
import Header from "../header/Header";
import History from "../history/History";
import WhiskeyInfo from "../whiskeyInfo/WhiskeyInfo";
import WhiskeyWonders from "../whiskeyWonders/WhiskeyWonders";

function App() {
    return (
        <div className="app">
            <Header/>
            <main>
                <History/>
                <WhiskeyInfo/>
                <WhiskeyWonders/>
            </main>
            <Footer/>
        </div>
    )
}

export default App