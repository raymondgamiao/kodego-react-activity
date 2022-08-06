import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Exercise 1</Link>
        </li>
        <li>
          <Link to="Exercise2">Exercise 2</Link>
        </li>
        <li>
          <Link to="Exercise3">Exercise 3</Link>
        </li>
        <li>
          <Link to="Exercise4">Exercise 4</Link>
        </li>
        <li>
          <Link to="Exercise5">Exercise 5</Link>
        </li>
        <li>
          <Link to="Exercise6">Exercise 6</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
