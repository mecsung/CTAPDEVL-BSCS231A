import { Link } from "react-router-dom";

const Home = () => {
    return (
    <div className="home">

      <section className="hero">
        <h1>Welcome to Manalo_Designs</h1>
        <p>Build modern and clean web applications</p>
        <Link to="/about">
            <button>Learn More</button>
        </Link>
      </section>

      <section className="features">
        <div className="card">
          <h3>Fast</h3>
          <p>Optimized performance and speed</p>
        </div>
        <div className="card">
          <h3>Clean UI</h3>
          <p>Modern and user-friendly design</p>
        </div>
        <div className="card">
          <h3>Responsive</h3>
          <p>Works on all devices</p>
        </div>
      </section>

      <section className="footer">
        <h2>About This App</h2>
        <p>This is a simple React app with clean UI.</p>
      </section>

    </div>
  );
}

export default Home;