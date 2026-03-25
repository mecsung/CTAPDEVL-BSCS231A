const Home = () => {
    return (
        <div className="Home">
            <h1>Welcome to My MERN App</h1>
            <p className="home-subtitle">
                A web application built for <strong>Application Development</strong> using the MERN stack.
            </p>

            <section className="home-section">
                <h2>What is MERN?</h2>
                <div className="mern-grid">
                    <div className="mern-card">
                        <h3>M</h3>
                        <p><strong>MongoDB</strong></p>
                        <p>NoSQL database for storing data in JSON-like documents.</p>
                    </div>
                    <div className="mern-card">
                        <h3>E</h3>
                        <p><strong>Express.js</strong></p>
                        <p>Backend web framework for building REST APIs with Node.js.</p>
                    </div>
                    <div className="mern-card">
                        <h3>R</h3>
                        <p><strong>React.js</strong></p>
                        <p>Frontend library for building dynamic user interfaces.</p>
                    </div>
                    <div className="mern-card">
                        <h3>N</h3>
                        <p><strong>Node.js</strong></p>
                        <p>JavaScript runtime for executing server-side code.</p>
                    </div>
                </div>
            </section>

            <section className="home-section">
                <h2>Pages</h2>
                <ul>
                    <li><strong>Home</strong> — Overview of the application</li>
                    <li><strong>Login</strong> — User authentication page</li>
                    <li><strong>About</strong> — Team and project information</li>
                </ul>
            </section>
        </div>
    );
}

export default Home;