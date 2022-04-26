import React, { useEffect, useContext } from "react";
import { Context } from "../../context/langContext";
import "./About.css";
import profilImg from "../../img/webp/profil.webp";
import useSlideX from "../../components/Hook/useSlideX";
import useAddRef from "../../components/Hook/useAddRef";
import { aboutData } from "../../constants/about"
import { dataTitle } from "../../constants/title"


export default function About() {

  const { ref, addToRef } = useAddRef();
  const slideX = useSlideX();
  const { lang } = useContext(Context);


  useEffect(() => {
    slideX(ref.current[0], 1000);
    slideX(ref.current[1], -1000);
  }, [slideX, ref]);

  return (
    <div className="container" id="about">
      <h1 className="title">{dataTitle[lang]['about']}</h1>
      <div className="container-about" ref={addToRef}>
        <div className="profil-img">
          <img src={profilImg} alt="Bitmoji Snapchat" />
        </div>

        <div className="biographie" ref={addToRef}>
          <p>
           {aboutData[lang]['text']}
          </p>
        </div>
      </div>
    </div>
  );
}
