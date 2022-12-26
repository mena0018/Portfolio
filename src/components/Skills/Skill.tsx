import "./Skills.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { SkillType } from "../../types/skill";

export default function Skill({ name, stacks }: SkillType) {
  return (
    <div className="container-skill">
      <h2 className="subtitle"> {name}</h2>
      <ul className="list-skills">
        {stacks.map((item: string, index: number) => (
          <li key={index} className="item-skill">
            <div className="content-stack">
              <div>
                <BsFillPatchCheckFill />
              </div>
              <div className="langage-level">
                <p>{item}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
