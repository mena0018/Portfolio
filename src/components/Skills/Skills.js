import React, { useEffect, useContext } from "react";
import { Context } from "../../context/langContext";
import "./Skills.css";
import Skill from "./Skill";
import useSlideY from "../../components/Hook/useSlideY";
import useAddRef from "../../components/Hook/useAddRef";
import { dataSkills } from "../../constants/skills";
import { dataTitle } from "../../constants/title"


export default function Skills() {
  const { ref, addToRef } = useAddRef();
  const slideY = useSlideY();
  const {lang} = useContext(Context)

  useEffect(() => {
    slideY(ref.current[0], -200);
    slideY(ref.current[1], 200, 0.1);
    slideY(ref.current[2], 200, 0.2);
    slideY(ref.current[3], 200, 0.3);
  }, [slideY, ref]);

  return (
    <div className="container" id="skills">
      <h1 className="title" ref={addToRef}>{dataTitle[lang]['skills']}</h1>

      <div className="container-skills">
        {dataSkills[lang].map((item, index) => (
          <div ref={addToRef} key={index}>
            <Skill name={item.name} stacks={item.stacks} />
          </div>
        ))}
      </div>
    </div>
  );
}
