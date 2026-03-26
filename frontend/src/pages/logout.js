const Logout = () => {
    return (
        <div className="login">
            <h1>Logout</h1>
            <form action>
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default Logout;