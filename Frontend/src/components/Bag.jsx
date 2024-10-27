import Footer from "./Footer";
import Header from "./Header";

const Bag = () => {
    return (
        <>
            <Header></Header>
            <main>
                <div className="bag-page">
                    <div className="bag-items-container">
                        {/* Add items here */}
                    </div>
                    <div className="bag-summary">
                        {/* Add summary here */}
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Bag;
