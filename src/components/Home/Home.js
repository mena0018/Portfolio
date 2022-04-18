import React, { useEffect } from "react";
import "./Home.css";
import formSVG from "../../img/blob.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import useSlideX from "../Hook/useSlideX";
import useSlideY from "../Hook/useSlideY";
import useAddRef from "../Hook/useAddRef";

export default function Home() {

  const { ref, addToRef } = useAddRef();
  const slideX = useSlideX();
  const slideY = useSlideY();

  useEffect(() => {
    slideY(ref.current[3]);
    slideX(ref.current[0], -1000, 0.4, 0.6, "top center", "bottom right");
    slideX(ref.current[2], -1000, 1.4, 0.6, "top center", "bottom right");
    slideX(ref.current[1], -1000, 1.3, 0.6, "top center", "bottom left");
  }, [slideX, ref, slideY]);

  return (
    <div className="Home" id="home" ref={addToRef}>
      <div className="container-presentation">
        <p className="text-presentation">
          Salut,
          <br /> je suis
          <span> Rabie, </span>
          Développeur Web.
        </p>
        <button className="btn-home" type="button" ref={addToRef}>
          <a href="#about">Me découvrir </a>
        </button>
        <div className="link-social-media" ref={addToRef}>
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/rabie-menad"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </span>
          <span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/mena0018"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </span>
        </div>
      </div>

      <div className="svg-form" ref={addToRef}>
        <img src={formSVG} alt="" />
      </div>
    </div>
  );
}
