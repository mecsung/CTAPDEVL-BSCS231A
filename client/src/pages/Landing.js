const Landing = () => {
    return (
        <div className="landing">
            <div className="land-container">
                <h1>Welcome to traveler!</h1>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit" className="button">
                    <div className="button-top">Login ka boi</div>
                    <div className="button-bottom"></div>
                    <div className="button-base"></div>
                </button>
            </div>
        </div>
    );
}


export default Landing;



