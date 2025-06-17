import { useEffect, useState } from "react"
import { LOGO_URL } from "../utils/const"
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

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

    const [btnStatus, setBtnStatus] = useState("Login");
    // useEffect called
    useEffect(() => {
        console.log("useEffect called");
    }, [btnStatus])

    const OnlineStatus = useOnlineStatus();
    return (
        <header className="header">
            {/* windows navbar */}
            <div style={{ display: "flex", justifyContent: "space-around", width: "100vw" }}>
                <div className="header-logo" style={Styles.Logo}>
                    <img src={LOGO_URL}
                        alt="no-food-image"
                        width={20}
                    />
                </div>
                <div className="Nav-Links">
                    <ul>
                        <li style={{ display: "flex", alignItems: "center" }}><Link style={{ display: "flex", alignItems: "center" }} className="link">Status - [ {
                            OnlineStatus === true ? <img width={15} src="https://assets-v2.lottiefiles.com/a/a52ff63e-1163-11ee-8709-e7f491c567ab/8NpTydAKvR.gif" alt="" /> : <p>🔴</p>

                         }]</Link></li>
                        <li><Link to="/" className="link">HOME</Link></li>
                        <li><Link to="/about" className="link">ABOUT</Link></li>
                        <li><Link to="/follow" className="link">FOLLOW US</Link></li>
                        <li><Link to="/contact" className="link">Contact</Link></li>

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
