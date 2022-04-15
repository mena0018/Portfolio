import React from "react";
import "./Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Skill({ name, stacks }) {
  return (
    <div className="container-skill">
      <h2 className="subtitle"> {name}</h2>
      <ul>
        {stacks.map((item, index) => (
          <li key={index}>
            <div className="content-stack">
              <FontAwesomeIcon icon={faCircleCheck} />
              {item}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
