import React, { useState } from "react";
import Modal from "./Modal";

function Navbar({ showNav, setShowNav }) {
  /* showModal 값에 따라 다른 모달창이 열립니다 */
  const [showModal, setShowModal] = useState("");

  /* 모바일 화면에서 메뉴버튼 클릭시 네비바를 열어줍니다 */
  const showNavBar = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className={`navbar`}>
      <div className="logo">Logo</div>
      <div className="navbar-content">
        <ul className={`nav-list ${showNav ? "show" : ""}`}>
          <li className="nav-item" onClick={() => setShowModal("Greeter")}>
            Welcome
          </li>
          <li className="nav-item">Chart</li>
          <li className="nav-item">Link 3</li>
          <li className="nav-item" onClick={() => setShowModal("Login")}>
            로그인
          </li>
        </ul>
        <div className="menu-icon" onClick={showNavBar}>
          <i className="fas fa-bars"></i>
        </div>
        {showModal !== "" ? (
          <Modal name={showModal} heading="Login" setShowModal={setShowModal} />
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}

export default Navbar;
