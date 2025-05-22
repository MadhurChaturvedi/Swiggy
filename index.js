import ReactDOM from "react-dom/client";

const Header = () => {
    const Logo = {
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
        gap: "5px",
        cursor: "pointer"
    }
    return (
        <header className="header">
            <div className="header-logo" style={Logo}>
                <img src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
                    alt="no-food-image"
                    width={20}
                />

            </div>
            <div className="Nav-Links">
                <ul>
                    <li>HOME</li>
                    <li>About</li>
                    <li>Follow Us</li>
                    <li>CART-[0]</li>
                </ul>
            </div>
        </header>
    )
}

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img className="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/42148879A.png" alt="" />
            <h4>Urban Bites</h4>
            <p>Shahi paneer</p>
            <p>&#8377;300</p>
            <p>Rating - &#9733; 4.5</p>
            <button className="buy">Buy</button>
        </div>
    )
}

const Footer = () => {
    const Logo = {
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
        gap: "5px",
    }
    return (
        <footer className="footer" style={{ width: "100vw", height: "15vh", background: "FFF", color: "#8395a7", border: "1px solid black" }}>
            <br />
            © 2025 YourCompanyName. All rights reserved.
        </footer>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" className="search_input_Box" placeholder="Search Food Here... 😋" />
                <button className="search-btn">🔎</button>
            </div>
            <div className="res-container">
                {/* Restaurant Card */}
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="App">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
