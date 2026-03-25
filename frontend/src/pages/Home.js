// The () is the parameter list of the function, in this case it is empty because 
// the Home component does not take any props
// The => is the arrow function syntax, it is a shorter way to write a function expression
const Home = () => {
    return (
        <div className="home">
            <h1>Home Page</h1>
        </div>
    );
}

export default Home;