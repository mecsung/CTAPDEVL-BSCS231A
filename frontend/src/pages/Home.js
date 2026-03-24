import { Link } from 'react-router-dom';
import '../css/home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="floating-note note-green"></div>
            <div className="floating-note note-yellow"></div>
            <div className="floating-note note-red"></div>
            <div className="floating-note note-pink"></div>
            <div className="floating-note note-blue"></div>

            <section className="hero">
                <div className="hero-content">
                    <h1>Express yourself, <br /><span>a note at a time.</span></h1>
                    <p>The simplest way to keep track of your thoughts, tasks, and daily inspirations.</p>
                    
                    <div className="cta-buttons">
                        <Link to="/Login" className="btn-primary">Get Started, It's Free!</Link>
                        <Link to="/About" className="btn-secondary">Learn More</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;