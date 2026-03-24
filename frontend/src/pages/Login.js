import '../css/login.css';

const Login = () => {
    return (
        
        <div className="login-page bg">
            <div className="login-card">
                <h1>Welcome Back</h1>
                <p>Please enter your details to sign in.</p>
                
                <form className="login-form">
                    <div className="input-group">
                        <label>Username</label>
                        <input type="text" placeholder="Enter your username" required />
                    </div>
                    
                    <div className="input-group">
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" required />
                    </div>
                    
                    <button type="submit" className="login-btn">Sign In</button>
                </form>
                
                <div className="login-footer">
                    <span>Don't have an account? </span>
                    <a href="/signup">Sign Up</a>
                </div>
            </div>
        </div>
   
    );
}

export default Login;