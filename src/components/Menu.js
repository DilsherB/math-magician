import React from "react";

const Menu = () => {
  const menuItems = {
    home: "Home",
    calculator: "Calculator",
    quote: "Quote",
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <h3>Math Magicians</h3>
        {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
        <ul className="navbar-nav d-flex">
          {Object.keys(menuItems).map((item) => (
            <li className="nav-item" key={item}>
              <a className="nav-link" href={`#${item}`}>
                {menuItems[item]}
              </a>
            </li>
          ))}
        </ul>
        {/* </div> */}
      </nav>
    </div>
  );
};

export default Menu;
