import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <section className="about-section">
        <h2 className="about-subtitle">Who We Are</h2>
        <p>
          Ang Notes App ni JEBET usa ka yano ug episyente nga pagkuha sa nota nga app 
          nga gidisenyo aron matabangan ang mga estudyante, propesyonal, ug tiglalang nga magpabiling organisado.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">Our Mission</h2>
        <p>
          Aron mahimo ang pagkuha ug pagdumala sa mga ideya nga dali ug dali makuha
          tanan.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">What Makes Us Different</h2>
        <ul className="about-list">
          <li> Limpyo ug walay kabaldahan nga disenyo</li>
          <li> Paspas ug responsive nga performance</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
