import "../css/Navbar.css";
import CartWidget from "./CartWidget";

const Navbar = () => { 
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>LOOk</h1>
            </div>
            <ul className="navbar-links">
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default Navbar;