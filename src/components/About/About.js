import React, {useEffect } from "react";
import "./About.css";
import profilImg from "../../img/webp/profil.webp";
import useSlideX from "../../components/Hook/useSlideX";
import useAddRef from "../../components/Hook/useAddRef";


export default function About() {
  const { ref, addToRef } = useAddRef();
  const slideX = useSlideX();

  useEffect(() => {
    slideX(ref.current[0], 1000);
    slideX(ref.current[1], -1000);
  }, [slideX, ref]);

  return (
    <div className="container" id="about">
      <h1 className="title">À propos</h1>
      <div className="container-about" ref={addToRef}>
        <div className="profil-img">
          <img src={profilImg} alt="Bitmoji Snapchat" />
        </div>

        <div className="biographie" ref={addToRef}>
          <p>
            J'ai découvert le monde du web en 2020, ce qui m'a motivé à
            entreprendre des études me permettant d'apprendre à coder.
            Concernant mon parcours scolaire, je suis en DUT Informatique et je
            serais en Licence Professionnelle développement web à partir de
            Septembre 2022. Pour appuyer les enseignements vus en DUT j'ai
            également suivi des formations telles que l'École du Web ou encore
            OpenClassroom. Finalement, pour me décrire je dirais que je suis
            quelqu'un de curieux, organisé et qui aime travailler en équipe.
          </p>
        </div>
      </div>
    </div>
  );
}
