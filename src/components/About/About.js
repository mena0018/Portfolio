import React, { useEffect, useContext } from "react";
import { Context } from "../../context/langContext";
import "./About.css";
import profilImg from "../../img/webp/profil.webp";
import useSlideX from "../../components/Hook/useSlideX";
import useSlideY from "../../components/Hook/useSlideY";
import useAddRef from "../../components/Hook/useAddRef";
import { aboutData } from "../../constants/about"
import { dataTitle } from "../../constants/title"


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
          <p>{aboutData[lang]['text']}</p>
        </div>
      </div>
    </div>
  );
}
