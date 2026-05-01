import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-col">
                    <p>info@myapp.com</p>
                    <p>Phone: +9 6767676767</p>
                    <p>Address: NU Laguna</p>
                </div>

                <div className="footer-col footer-center">
                    <p>⋆˙⟡ This is the footer of My App ⋆˙⟡</p>
                </div>

                <div className="footer-col footer-right">
                    <p>benavides-act4</p>
                    <p>BSCS231A</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;