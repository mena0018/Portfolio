import { useContext, useState } from "react";
import { Context } from "../../context/langContext";
import FrenchFlag from "../../img/icones/france.webp";
import EnglishFlag from "../../img/icones/royaume-uni.webp";
import Settings from "../../img/icones/settings.svg"
import "./ToggleLang.css";


export default function ToggleLang() {

  const { toggleLang } = useContext(Context);

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive)

  
  return (
    <>
      <div className={`label-btn ${isActive ? "active" : ""}`} onClick={handleClick}></div>

      <img src={Settings}
           onClick={handleClick}
           alt="icône de paramètres" 
           className={`logo-settings ${isActive ? "active" : ""}`} 
      />


      <div onClick={handleClick} className={`items ${isActive ? "active" : ""}`}>
          <img src={EnglishFlag} alt="Drapeau Anglais" onClick={() => toggleLang("EN")}/>
      </div>

      <div onClick={handleClick} className={`items ${isActive ? "active" : ""}`}>
        <img src={FrenchFlag} alt="Drapeau Français" onClick={() => toggleLang("FR")} />  
      </div>
    </>
  );
}
