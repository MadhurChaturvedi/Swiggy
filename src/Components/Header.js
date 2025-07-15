import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/const";
import { Link } from "react-router"; // fixed react-router
import useOnlineStatus from "../utils/useOnlineStatus";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import UseContext from "../utils/useContext";


export default function Header() {
  const [btnStatus, setBtnStatus] = useState("Login");
  const [showMenu, setShowMenu] = useState(false);
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UseContext)

  return (
    <header className="w-full bg-white border fixed top-0 left-0 z-50">
      {/* Top Nav */}
      <div className="flex justify-between items-center px-6 py-3 md:px-10">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={LOGO_URL} alt="logo" className="w-10 h-10" />
          <span className="font-bold text-xl">Foodies</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-5 items-center text-sm font-medium uppercase">
          <li><Link to="/" className="hover:text-purple-600 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-purple-600 transition">About</Link></li>
          <li><Link to="/follow" className="hover:text-purple-600 transition">Follow Us</Link></li>
          <li><Link to="/contact" className="hover:text-purple-600 transition">Contact</Link></li>
          <li><Link to="/Grocoery" className="hover:text-purple-600 transition">Grocery</Link></li>
          <li>{loggedInUser} </li>
          <li className="flex items-center gap-1">
            Status -
            {onlineStatus
              ? <img width={15} src="https://assets-v2.lottiefiles.com/a/a52ff63e-1163-11ee-8709-e7f491c567ab/8NpTydAKvR.gif" alt="online" />
              : <span>🔴</span>}
          </li>
          <button
            className="px-3 py-1 bg-purple-600 text-white rounded"
            onClick={() => setBtnStatus(prev => prev === "Login" ? "Logout" : "Login")}
          >
            {btnStatus}
          </button>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden text-2xl">
          {showMenu ? (
            <HiX onClick={() => setShowMenu(false)} />
          ) : (
            <HiMenuAlt3 onClick={() => setShowMenu(true)} />
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`md:hidden fixed top-0 right-0 h-full bg-white w-1/2 shadow-lg z-40 transition-transform duration-300 ease-in-out ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col gap-4 p-6 text-base font-medium border">
          <li className=" flex justify-end" onClick={() => setShowMenu(false)}><button><HiX /></button></li>
          <li className="border p-2"><Link to="/" onClick={() => setShowMenu(false)}>Home</Link></li>
          <li className="border p-2"><Link to="/about" onClick={() => setShowMenu(false)}>About</Link></li>
          <li className="border p-2"><Link to="/follow" onClick={() => setShowMenu(false)}>Follow Us</Link></li>
          <li className="border p-2"><Link to="/contact" onClick={() => setShowMenu(false)}>Contact</Link></li>
          <li className="border p-2"><Link to="/Grocoery" onClick={() => setShowMenu(false)}>Grocery</Link></li>
          <li className="border p-2">Cart</li>
          <li className="flex items-center gap-1 border p-2">
            Status -
            {onlineStatus
              ? <img width={15} src="https://assets-v2.lottiefiles.com/a/a52ff63e-1163-11ee-8709-e7f491c567ab/8NpTydAKvR.gif" alt="online" />
              : <span>🔴</span>}
          </li>
          <button
            className="px-3 py-1 bg-purple-600 text-white rounded w-fit"
            onClick={() => {
              setBtnStatus(prev => prev === "Login" ? "Logout" : "Login");
              setShowMenu(false);
            }}
          >
            {btnStatus}
          </button>
        </ul>
      </div>
    </header>
  );
}
