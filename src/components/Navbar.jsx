import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./NavbarStyles.css";

function Navbar() {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <div className="nav-container">
      <nav>
        <Link to="/" className="logo">
          <img src="./logo.png" width="70" height="70" />
        </Link>
        <div>
          <ul className={navToggle ? "navbar navbarActive" : "navbar"}>
            <li>
              <Link
                onClick={() => setNavToggle(!navToggle)}
                to="/"
                className="active"
              >
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setNavToggle(!navToggle)} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={() => setNavToggle(!navToggle)} to="/rate">
                Rate
              </Link>
            </li>
            <li>
              <Link
                href="/auth/login"
                className="bg-info px-4 py-2 text-light rounded"
              >
                Join now
              </Link>
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
