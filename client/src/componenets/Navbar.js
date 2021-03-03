import React from "react";

function Navbar({ showNav, setShowNav }) {
  const showSideBar = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className={`navbar`}>
      <div className="logo">
        <a href="">Logo</a>
      </div>
      <div className="navbar-content">
        <ul className={`nav-list ${showNav ? "show" : ""}`}>
          <li className="nav-item">
            <a href="#">News</a>
          </li>
          <li className="nav-item">
            <a href="#">Link 2</a>
          </li>
          <li className="nav-item">
            <a href="#">Link 3</a>
          </li>
          <li className="nav-item">
            <a href="#">Link 4</a>
          </li>
        </ul>
        <div className="menu-icon" onClick={showSideBar}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
