import { useState } from "react"
import { LOGO_URL } from "../utils/const"

export default function Header() {
    const Styles = {
        Logo: {
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
            gap: "5px",
            cursor: "pointer"
        },
        Login: {
            padding: "5px ",
            borderRadius: "10px"
        }
    }
    const [btnStatus, setBtnStatus] = useState("Login")
    return (
        <header className="header">
            {/* windows navabr */}
            <div style={{ display: "flex", justifyContent: "space-around", width: "100vw" }}>
                <div className="header-logo" style={Styles.Logo}>
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
                        <button onClick={() => {
                            btnStatus === "Login" ? setBtnStatus("Logout") : setBtnStatus("Login")
                        }}
                            style={Styles.Login}>{btnStatus}</button>
                    </ul>
                </div>
            </div>

        </header>
    )
}
