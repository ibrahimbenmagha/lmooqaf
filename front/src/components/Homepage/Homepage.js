import React from "react";
import {Link} from "react-router-dom";

function HomePage() {
  return (
    <div className="App">
        <Link to="/login">Login</Link>
      </div>

  );
}

export default HomePage;