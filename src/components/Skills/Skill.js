import "./Skills.css";
import { BsFillPatchCheckFill } from "react-icons/bs"


export default function Skill({ name, stacks }) {
  return (
    <div className="container-skill">
      <h2 className="subtitle"> {name}</h2>
      <ul className="list-skills">
        {stacks.map((item, index) => (
          <li key={index} className="item-skill">

            <div className="content-stack">
              <div>
                <BsFillPatchCheckFill />
              </div>
              <div className="langage-level">
                <p>{item[0]}</p>
                <p>{item[1]}</p>
              </div>
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}