import { useEffect, useContext, useRef } from "react";
import { Context } from "../../context/langContext";
import "./About.css";
import profilImg from "../../img/webp/about_me/profil.webp";
import useSlideX from "../../hook/useSlideX";
import useSlideY from "../../hook/useSlideY";
import { dataTitle } from "../../constants/title";
import biographieEn from "../../img/webp/about_me/about_me_en.webp";
import biographieFr from "../../img/webp/about_me/about_me_fr.webp";

export default function About() {
  const slideX = useSlideX();
  const slideY = useSlideY();
  const { lang } = useContext(Context);

  const h1Ref = useRef<HTMLHeadingElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    slideY(h1Ref.current, -100, 0.1);
    slideX(imgRef.current, -1000, 0, 0.4);
    slideX(divRef.current, 1000, 0, 0.4);
  }, [slideX, slideY]);

  return (
    <div className="container" id="about">
      <h1 className="title" ref={h1Ref}>
        {dataTitle[lang]["about"]}
      </h1>

      <div className="container-about">
        <div className="profil-img">
          <img src={profilImg} alt="Bitmoji Snapchat" ref={imgRef} />
        </div>

        <div className="biographie" ref={divRef}>
          <img
            src={lang === "FR" ? biographieFr : biographieEn}
            alt="Capture d'écran me décrivant"
          />
        </div>
      </div>
    </div>
  );
}
