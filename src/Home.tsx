import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <p>Click the button to go to the login page.</p>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </>
  );
}

export default Home;
