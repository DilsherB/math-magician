import React from "react";
import { NavLink } from "react-router-dom";

// Navbar component
const Navbar = () => {
  const menuItems = {
    home: "Home",
    calculator: "Calculator",
    quote: "Quote",
  };
  return (
    <div className="d-inline-flex px-3 w-100 bg-light gradMenu border-bottom">
      <h5>Math Magicians</h5>
      <ul className="d-flex justify-content-end gap-5 w-100 mt-2">
        {Object.keys(menuItems).map((item) => (
          <li key={item} className="list-group-item">
            <NavLink to={`${item}`} className="text-decoration-none text-white">
              {menuItems[item]}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
