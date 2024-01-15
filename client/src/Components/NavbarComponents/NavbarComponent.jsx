import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../media/Logo.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    const editor = document.querySelector(".editor");

    if (editor) {
      editor.classList.toggle("hidden", !click);
    }
  };

  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar">
      <Link to="/Home">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </Link>
      <Link to="/Home" className="site-title">
        Webnotes
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <CustomLink to="/Home" onClick={closeMobileMenu}>
            Home
          </CustomLink>
        </li>
        <li className="nav-item">
          <CustomLink to="/NotesList" onClick={closeMobileMenu}>
            Notes List
          </CustomLink>
        </li>
        {/* <li className="nav-item">
          <CustomLink to="/AddNote" onClick={closeMobileMenu}>
            Add Note
          </CustomLink>
        </li> */}
      </ul>
      <div className="br" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "black" }} />
        ) : (
          <FaBars size={30} style={{ color: "black" }} />
        )}
      </div>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const rezolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: rezolvedPath.pathname });
  return (
    <Link to={to} {...props} className={isActive ? "active" : ""}>
      {children}
    </Link>
  );
}

export default Navbar;
