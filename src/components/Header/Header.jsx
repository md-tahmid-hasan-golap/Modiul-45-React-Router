import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router";
const Header = () => {
  return (
    <div>
      <h2>This is header</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobiles">Mobile</NavLink>
        <NavLink to="/laptops">Laptop</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/users2">Users2</NavLink>
      </nav>
    </div>
  );
};

export default Header;
