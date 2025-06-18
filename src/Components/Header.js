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
       
    }

    const [btnStatus, setBtnStatus] = useState("Login");
    // useEffect called
    useEffect(() => {
        console.log("useEffect called");
    }, [btnStatus])

    const OnlineStatus = useOnlineStatus();
    return (
        <header className="w-full flex justify-center items-center h-14">
            {/* windows navbar */}
            <div className="flex gap-9 items-center  justify-around w-5/6 px-10 ">
                <div className="flex" style={Styles.Logo}>
                    <img src={LOGO_URL}
                        alt="no-food-image"
                        width={40}
                    />
                </div>
                <div className="flex items-center">
                    <ul className="flex items-center gap-3 select-none">

                        <li><Link to="/" className="uppercase font-mono hover:text-purple-600 transition-all duration-75">HOME</Link></li>
                        <li><Link to="/about" className="uppercase font-mono hover:text-purple-600 transition-all duration-75">ABOUT</Link></li>
                        <li><Link to="/follow" className="uppercase font-mono hover:text-purple-600 transition-all duration-75">FOLLOW US</Link></li>
                        <li><Link to="/contact" className="uppercase font-mono hover:text-purple-600 transition-all duration-75">Contact</Link></li>
                        <li><Link to="/Grocoery" className="uppercase font-mono hover:text-purple-600 transition-all duration-75">Grocoery</Link></li>

                        <li>CART-[0]</li>
                        <li style={{ display: "flex", alignItems: "center" }}><Link style={{ display: "flex", alignItems: "center" }} className="link">Status - [ {
                            OnlineStatus === true ? <img width={15} src="https://assets-v2.lottiefiles.com/a/a52ff63e-1163-11ee-8709-e7f491c567ab/8NpTydAKvR.gif" alt="" /> : <p>🔴</p>

                        }]</Link></li>
                        <button className="px-3 py-0.5 bg-purple-600 text-white text-center" onClick={() => {
                            btnStatus === "Login" ? setBtnStatus("Logout") : setBtnStatus("Login")
                        }}>{btnStatus}</button>
                    </ul>
                </div>
            </div>

        </header>
    )
}
