import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className = "footer-container">
                <div className="left-information">
                    <li><FontAwesomeIcon icon={faEnvelope} className="email-icon"/> info@myapp.com</li>
                    <li><FontAwesomeIcon icon={faPhone} className="phone-icon"/> Phone: +9 6767676767</li>
                    <li><FontAwesomeIcon icon={faLocationDot} className="address-icon"/> Address: NU Laguna</li>
                </div>

                <p>⋆˙⟡ This is the footer of My App ⋆˙⟡</p>

                <div className="right-information">
                    <li>benavides-act4</li>
                    <li>BSCS231A</li>
                </div>
            </div>
        </footer>
    );
}

export default Footer;