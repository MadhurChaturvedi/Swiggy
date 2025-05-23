import { LOGO_URL } from "../utils/const"

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
                <img src={LOGO_URL}
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
