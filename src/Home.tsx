/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";

function Home() {
  const handleLoginClick = () => {
    // We simulate a GTM event before the redirection.
    // This should match what you would configure in your real application.
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "cta_click",
        event_category: "navigation",
        event_label: "login_button_home",
      });
    }
  };

  return (
    <>
      <h1>Home Page</h1>
      <p>Click the button to go to the login page.</p>
      <Link to="/login" onClick={handleLoginClick}>
        <button>Login</button>
      </Link>
    </>
  );
}

export default Home;
