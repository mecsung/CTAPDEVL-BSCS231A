const About = () => {
    return (
        <div className="About">
            <h1>About</h1>

            <section className="about-section">
                <h2>The Team</h2>
                <ul>
                    <li><strong>Elliah Rain S. Panopio</strong> — Frontend Developer</li>
                    <li><strong>Elliah Rain S. Panopio</strong> — Backend Developer</li>
                    <li><strong>Elliah Rain S. Panopio</strong> — UI/UX Designer</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>Tech Stack</h2>
                <ul>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>Node</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>Contact</h2>
                <p>Email: <a href="mailto:panopioes@students.nu-laguna.edu.ph">panopioes@students.nu-laguna.edu.ph</a></p>
                <p>GitHub: <a href="https://github.com" target="_blank" rel="noreferrer">github.com/myapp</a></p>
            </section>
        </div>
    );
}

export default About;