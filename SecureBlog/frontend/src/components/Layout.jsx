import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>{" | "}
        {!isLoggedIn ? (
          <>
            <Link to="/register">Register</Link>{" | "}
            <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Dashboard</Link>{" | "}
            <Link to="/logout">Logout</Link>
          </>
        )}
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
