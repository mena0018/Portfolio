import React, { useState, useContext } from "react";
import { Context } from "../../context/langContext";
import "./Navbar.css";
import { navbarData } from "../../constants/navbar";


export default function Navbar() {

  const [isActive, setIsActive] = useState(false);
  const { lang } = useContext(Context);
  
  const btnClick = () => setIsActive(!isActive);

//   useEffect(() => {
//       slideY("li", -200, 2)
//   })

  return (
    <>
      <div className="nav">
        <nav>
          <ul
            onClick={btnClick}
            className={`liste-nav ${isActive ? "active" : ""}`}
          >
            {navbarData[lang].map((item, index) => (
              <li className="item-nav" key={index}>
                <a href={item.id} className="nav-link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        onClick={btnClick}
        className={`btn-responsive-menu ${isActive ? "active" : ""} `}
      >
        <div className="lignes"></div>
        <div className="lignes"></div>
        <div className="lignes"></div>
      </div>
    </>
  );
}
