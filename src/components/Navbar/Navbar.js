import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const btnClick = () => setIsActive(!isActive);

  return (
    <>
      <div className="nav">
        <nav>
          <ul
            onClick={btnClick}
            className={isActive ? "liste-nav active" : "liste-nav"}
          >
            <li className="item-nav">
              <a href="#home" className="nav-link">
                Accueil
              </a>
            </li>
            <li className="item-nav">
              <a href="#about" className="nav-link">
                À propos
              </a>
            </li>
            <li className="item-nav">
              <a href="#skills" className="nav-link">
                Compétences
              </a>
            </li>
            <li className="item-nav">
              <a href="#realisations" className="nav-link">
                Réalisations
              </a>
            </li>
            <li className="item-nav">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className={
          isActive ? "btn-responsive-menu active" : "btn-responsive-menu"
        }
        onClick={btnClick}
      >
        <div className="lignes"></div>
        <div className="lignes"></div>
        <div className="lignes"></div>
      </div>
    </>
  );
}
