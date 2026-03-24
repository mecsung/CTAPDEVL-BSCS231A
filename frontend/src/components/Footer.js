import { Link } from "react-router-dom";
import '../css/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <p>&copy; {new Date().getFullYear()} @Kwen-Thoughts. All rights reserved.</p>
                </div>
                <nav className="footer-links">
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms of Service</Link>
                    <Link to="/contact">Support</Link>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;