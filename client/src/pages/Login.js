import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <h1>Log In</h1>
      <form action="">
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
