import { Link } from 'react-router-dom';

const AboutUs = () => {
    return(
        <header>
            <div className="container">
                <Link to="/">
                <h1>ABOUT US</h1>
                </Link>
            </div>
        </header>
    );
}

export default AboutUs;