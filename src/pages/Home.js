import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Welcome to Scheduler</h1>
        <p>Organize your tasks, manage your time, and stay productive every day.</p>
        <Link to="/login" className="btn">Get Started</Link>
      </section>

      {/* FEATURES SECTION */}
      <section className="features container">
        <div className="card">
          <h3>Plan Your Day</h3>
          <p>Create schedules and never miss important tasks.</p>
        </div>

        <div className="card">
          <h3>Stay Organized</h3>
          <p>Keep everything in one place and manage time efficiently.</p>
        </div>

        <div className="card">
          <h3>Boost Productivity</h3>
          <p>Track your progress and achieve your goals faster.</p>
        </div>
      </section>

    </div>
  );
};

export default Home;