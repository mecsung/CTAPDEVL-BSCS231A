import { Link } from 'react-router-dom';
import '../css/about.css';

const About = () => {
    const sampleNotes = [
        { id: 1, title: "Morning Thoughts", content: "Sometimes you just have to let's go!", date: "Mar 24, 2026" },
        { id: 2, title: "Project Goals", content: "Thesis Offended.", date: "Mar 23, 2026" },
        { id: 3, title: "Quick Reminder", content: "Give up the good work.", date: "Mar 22, 2026" },
        { id: 4, title: "Weekend Plans", content: "If it doesn't work, at least your tired!", date: "Mar 21, 2026" },
        { id: 5, title: "Daily Affirmation", content: "What goes around all around.", date: "Mar 20, 2026" },
        { id: 6, title: "Motivation", content: "Action speak louder than speaker!", date: "Mar 19, 2026" },
    ];

    return (
        <div className="about-container">
            <section className="about-intro">
                <h1>Project: Learning React</h1>
                <p>A modern web app designed for sharing and organizing your thoughts.</p>
            </section>

            <section className="showcase">
                <h2>See it in Action</h2>
                <div className="notes-grid">
                    {sampleNotes.map(note => (
                        <div key={note.id} className="sample-note">
                            <h3>{note.title}</h3>
                            <p>{note.content}</p>
                            <span className="note-date">{note.date}</span>
                        </div>
                    ))}
                </div>
            </section>

            <div className="about-cta">
                <Link to="/Login" className="btn-primary">Try it yourself</Link>
            </div>
        </div>
    );
}

export default About;