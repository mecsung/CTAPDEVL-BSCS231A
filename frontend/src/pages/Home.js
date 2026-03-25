const Home = () => {
    return (
        <div className="home-page">
            <div className="welcome-container">
                <h1 className="welcome-title">Welcome to My React App</h1>
                <p className="welcome-subtitle">Your journey starts here</p>
                <div className="welcome-features">
                    <div className="feature-card">
                        <span className="feature-icon">🚀</span>
                        <h3>Fast</h3>
                        <p>Lightning-fast performance</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">🎨</span>
                        <h3>Modern</h3>
                        <p>Beautiful and responsive design</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">⚡</span>
                        <h3>Powerful</h3>
                        <p>Built with the latest tech</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;