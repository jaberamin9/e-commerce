import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';

function Nav() {
    return (
        <div>
            <header className="header">
                <div className="logo">LBES</div>
                <nav className="navbar">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/category"}>Category</Link>
                    <Link to={"/about"}>About</Link>
                </nav>
                <div className="action">
                    <Link to={"/cart"}><FontAwesomeIcon icon={faCartShopping} style={{ "color": "black", "font-size": "18px" }} /></Link>
                </div>
            </header>
        </div>
    )
}

export default Nav
