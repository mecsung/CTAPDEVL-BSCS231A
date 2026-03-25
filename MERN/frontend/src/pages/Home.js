const Home = () => {
    return (
        <div className="Home">
            <h1>Welcome to My MERN App</h1>
            <p className="home-subtitle">
                A web application built for <strong>Application Development</strong> using the MERN stack.
            </p>

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
