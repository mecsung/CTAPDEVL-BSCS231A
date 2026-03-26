import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to MatthewNote</h1>

      <img
        src="https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/11/morty-smith-from-rick-and-morty.jpg?w=1200&h=675&fit=crop"
        alt="Morty Smith"
        className="home-image"
      />

      <p className="home-description">
        Aw jeez, welcome to MatthewNote. This is where you can keep your notes,
        ideas, and important reminders in one place, y-you know? It is simple,
        easy to use, and really helpful when your mind is all over the place.
      </p>

      
    </div>
  );
};

export default Home;