import React, { useEffect, useContext } from "react";
import { Context } from "../../context/langContext";
import "./About.css";
import profilImg from "../../img/webp/about_me/profil.webp";
import useSlideX from "../../hook/useSlideX";
import useAddRef from "../../hook/useAddRef"
import useSlideY from "../../hook/useSlideY";
import { dataTitle } from "../../constants/title"
import biographieEn from "../../img/webp/about_me/about_me_en.webp";
import biographieFr from "../../img/webp/about_me/about_me_fr.webp";


export default function About() {

  const { ref, addToRef } = useAddRef();
  const slideX = useSlideX();
  const slideY = useSlideY();
  const { lang } = useContext(Context);


  useEffect(() => {
    slideY(ref.current[0], -100, 0.1);
    slideX(ref.current[1], -1000, 0.5, 0.6);
    slideX(ref.current[2], 1000, 0.5, 0.6);
  }, [slideX,slideY, ref]);

  return (
    <div className="container" id="about">

      <h1 className="title" ref={addToRef}>
         {dataTitle[lang]['about']}
      </h1>
      
      <div className="container-about">

        <div className="profil-img">
          <img src={profilImg} alt="Bitmoji Snapchat" ref={addToRef} />
        </div>

        <div className="biographie" ref={addToRef}>
          <img src={lang === 'FR' ? biographieFr : biographieEn}
               alt="Capture d'écran me décrivant" />
        </div>
      </div>
    </div>
  );
}
