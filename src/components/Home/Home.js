import React, { useRef, useEffect } from "react";
import "./Home.css";
import formSVG from "../../img/blob.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  let ref = useRef([]);

  const addToRef = (element) => {
    if (element && !ref.current.includes(element)) {
      ref.current.push(element);
    }
  };

  const slideY = (element, start, end, delay, duration) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: element,
          start: start,
          end: end,
        },
      }
    );
  };

  const slideX = (element, start, end, delay, duration) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -1000,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: element,
          start: start,
          end: end,
        },
      }
    );
  };

  useEffect(() => {
    slideY(ref.current[3], "top center", "bottom center");
    slideX(ref.current[0], "top center", "bottom right");
    slideX(ref.current[2], "top center", "bottom right", 1.4);
    slideX(ref.current[1], "top center", "bottom left", 1.3);
  }, []);

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
