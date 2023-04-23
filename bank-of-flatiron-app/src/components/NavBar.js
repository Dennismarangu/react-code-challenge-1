import React from "react";
import "./NavBar.css"

function NavBar() {
  const links = ["home", "about"];

  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={`#${link}`}>
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
