import React from "react";
import { Link } from "react-router-dom";
import "./NavBarStyles.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Currently, we're using <a> tags to navigate to different pages.
      This means that every time we click on a link, the page will reload.
      Let's fix that!
      */}
      <Link to="/All-Tasks">All Tasks</Link>
      <Link to="/completed">Completed Tasks</Link>
      <Link to="/incomplete">Incomplete Tasks</Link >
      <Link to="/add-task">Add Task</Link >
    </nav>
  );
};

export default NavBar;
