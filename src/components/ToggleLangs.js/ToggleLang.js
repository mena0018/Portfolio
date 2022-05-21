import { useContext, useState } from "react";
import { Context } from "../../context/langContext";
import { ThemeContext } from "../../context/themeContext";
import FrenchFlag from "../../img/france2.png";
import EnglishFlag from "../../img/royaume-uni2.png";
import Settings from "../../img/settings.svg"
import "./ToggleLang.css";
import {MdOutlineDarkMode, MdDarkMode} from "react-icons/md"


export default function ToggleLang() {

  const { lang, toggleLang } = useContext(Context);
  const { toggleTheme, theme } = useContext(ThemeContext);

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
         { lang === 'EN' ?
   
             <img src={FrenchFlag}
                  alt="Drapeau Français"
                  onClick={() => toggleLang("FR")}
            /> :   
            <img src={EnglishFlag}
                 alt="Drapeau Anglais"
                 onClick={() => toggleLang("EN")}
            />
         }
      </div>

      <div onClick={handleClick} className={`items ${isActive ? "active" : ""}`}>

         <button onClick={toggleTheme} className="toggle-theme-btn">
               {theme === "light" ? <MdDarkMode /> : <MdOutlineDarkMode />}
         </button>

      </div>
    </>
  );
}
