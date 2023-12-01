import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{
    // display an <a> tag for each link here
    // Using interpolation to sync up the # with {link} was a little tricky but got it! 
      links.map((link) => {
        return <a key={link} href={`#${link}`}>{link}</a>
      })
    }</nav>;
}

export default NavBar;
