import './Footer.css'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer>
                <h2>LBES</h2>
                <div class="footer-navbar">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/category"}>Category</Link>
                    <Link to={"/about"}>About</Link>
                </div>
                <div class="social-link">
                    <a href="https://www.facebook.com/jaber.amin.984786/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://github.com/jaberamin9/" target="_blank"><i class="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/jaber-amin-1a9559143" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                </div>

                <p>©2022-2023 Jaber Amin</p>
            </footer>
        </>
    )
}

export default Footer