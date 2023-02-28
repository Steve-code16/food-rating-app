import React, { useState } from "react";

import "./NavbarStyles.css";

function Navbar() {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <div>
      <nav>
        <a href="/" className="logo">
          Logo
        </a>
        <div>
          <ul className={navToggle ? "navbar navbarActive" : "navbar"}>
            <li>
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/rate">Rate</a>
            </li>
          </ul>
        </div>

        <div className="mobile">
          <i
            onClick={() => setNavToggle(!navToggle)}
            className={navToggle ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
