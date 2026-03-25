const Home = () => {
    return (
        <div className="login">
            <h1>Home Page</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" placaholder="Username" />
                <label htmlFor="password">Password:</label>
                <input type="password" placaholder="Password" />
                <button type="submit">Home</button>
            </form>
         </div>
    );
}

export default Home;