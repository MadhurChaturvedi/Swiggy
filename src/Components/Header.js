export default function Header() {
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
