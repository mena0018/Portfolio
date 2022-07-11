import { useEffect, useContext, useRef } from "react";
import { Context } from "../../context/langContext";
import "./Skills.css";
import Skill from "./Skill";
import useSlideY from "../../hook/useSlideY";
import useAddRef from "../../hook/useAddRef";
import { dataSkills } from "../../constants/skills";
import { dataTitle } from "../../constants/title"
import { SkillType } from "../../types/skill";


export default function Skills() {

  const { ref, addToRef } = useAddRef();
  const slideY = useSlideY();
  const {lang} = useContext(Context)

  const h1Ref = useRef<HTMLHeadingElement>(null)


  useEffect(() => {
    slideY(h1Ref.current, -200, 0.1);
    slideY(ref.current[0], -200, 0.7, 0.5, -180);
    slideY(ref.current[1], -200, 0.7, 0.5, 180);
  }, [slideY, ref]);

  return (
    <div className="container" id="skills">
      <h1 className="title" ref={h1Ref}>{dataTitle[lang]['skills']}</h1>

      <div className="container-skills">
        {dataSkills[lang].map((item: SkillType, index: number) => (
          <div ref={addToRef} key={index}>
             <Skill name={item.name} stacks={item.stacks} />
          </div>
          ))}
      </div>
    </div>
  );
}
