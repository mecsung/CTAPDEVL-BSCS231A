import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <footer className="about-us">
      <div className="about-us__container">
        <h2 className="about-us__title">
          <Link to="/about">About Us</Link>
        </h2>
        <p className="about-us__description">
          We are dedicated to providing top solutions and services that
          empower our customers. Learn more about our journey and mission.
        </p>
        <div className="about-us__links">
          <Link to="/team" className="about-us__link">Our Team</Link>
          <Link to="/careers" className="about-us__link">Careers</Link>
          <Link to="/contact" className="about-us__link">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default AboutUs;