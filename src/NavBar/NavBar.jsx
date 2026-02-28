import React from "react";

import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
const NavBar = () => {
  return (
    <div>
      <section className="navSection">
        {/* <article> */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            listStyle: "none",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
        >
          <li style={{ textAlign: "center" }}>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link>
              <BsCart3 />
            </Link>
          </li>
        </ul>
        {/* </article> */}
      </section>
    </div>
  );
};

export default NavBar;
