import "../components/button.css";
import "./home.css";

const home = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    Ang imong mga Nota, Bisan asa, Bisan kanus-a
                </h1>
                <p className="hero-subtitle">
                    Pagsubay sa imong mga ideya, buluhaton, ug mga pahinumdom sa usa ka limpyo nga wanang.
                </p>
                <div className="hero-buttons">
                    <button className="btn-primary">Get Started</button>
                    <button className="btn-destructive">Learn More</button>
                </div>
            </div>
        </section>

    )
}

export default home;