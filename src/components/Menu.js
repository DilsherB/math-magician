import React from "react";

// Navbar component
const Navbar = () => {
  const menuItems = {
    home: "Home",
    calculator: "Calculator",
    quote: "Quote",
  };
  return (
    <div className="d-inline-flex px-3 w-100 bg-light">
      <h5>Math Magicians</h5>
      <ul className="d-flex justify-content-end gap-5 w-100 mt-2">
        {Object.keys(menuItems).map((item) => (
          <li key={item} className="list-group-item">
            <a href={`#${item}`} className="text-decoration-none text-dark">
              {menuItems[item]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
