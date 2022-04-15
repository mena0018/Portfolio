import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";
import Skill from "./Skill";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Skills() {
  let ref = useRef([]);

  const addToRef = (element) => {
    if (element && !ref.current.includes(element)) {
      ref.current.push(element);
    }
  };

  const slideY = (element, valeurDepart, delay, duration) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: valeurDepart || -200,
      },
      {
        opacity: 1,
        y: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };

  useEffect(() => {
    slideY(ref.current[0],  200,  0.1);
    slideY(ref.current[1],  200,   0.3);
    slideY(ref.current[2],  200, 0.5);
  }, []);

  return (
    <div className="container" id="skills">
      <h1 className="title">Compétences</h1>

      <div className="container-skills">
        <div ref={addToRef}>
          <Skill
            name="Front-End"
            stacks={["CSS / SCSS", "GSAP", "JavaScript", "React.Js"]}
          />
        </div>
        <div ref={addToRef}>
          <Skill
            name="Back-End"
            stacks={["PHP", "Symfony", "API Platform", "Node.Js"]}
          />
        </div>
        <div ref={addToRef}>
          <Skill name="Outils" stacks={["Git", "GitHub", "MySQL", "Figma"]} />
        </div>
      </div>
    </div>
  );
}
