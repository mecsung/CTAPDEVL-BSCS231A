import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About MatthewNote</h1>

      <img
        src="https://www.nicepng.com/png/detail/3-30738_rick-and-morty-images-rick-and-morty-wallpaper.png"
        alt="Rick and Morty"
        className="about-image"
      />

      <p className="about-description">
        Aw jeez, so, MatthewNote is like a simple place where you can keep your
        notes, ideas, and important stuff without everything getting all messy
        and confusing, y-you know? It is made to help users stay organized in a
        really easy way.
      </p>

      <button>About Click Me!</button>
    </div>
  );
};

export default AboutUs;