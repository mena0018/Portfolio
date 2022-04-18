import React, { useEffect } from "react";
import "./Skills.css";
import Skill from "./Skill";
import useSlideY from "../../components/Hook/useSlideY";
import useAddRef from "../../components/Hook/useAddRef";
import { dataSkills } from "../constants";

export default function Skills() {
  const { ref, addToRef } = useAddRef();
  const slideY = useSlideY();

  useEffect(() => {
    slideY(ref.current[0], 200, 0.1);
    slideY(ref.current[1], 200, 0.3);
    slideY(ref.current[2], 200, 0.5);
  }, [slideY, ref]);

  return (
    <div className="container" id="skills">
      <h1 className="title">Compétences</h1>

      <div className="container-skills">
        {dataSkills.map((item, index) => (
          <div ref={addToRef} key={index}>
            <Skill name={item.name} stacks={item.stacks} />
          </div>
        ))}
      </div>
    </div>
  );
}
