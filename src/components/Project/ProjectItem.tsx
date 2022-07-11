import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectType } from "../../types/project";


export default function ProjectItem({ img, title, description, url, icons } : ProjectType) {
  return (
    <div className="project-item">
      <div className="bloc-img">
        <a target="_blank" rel="noreferrer" href={url}>
          <img src={img} alt="Miniature de projet que j'ai pu réaliser" />
        </a>
      </div>

      <div className="content-project">
        <h2 className="project-title">
          <span className="span-title"> {title}</span>
         
          <a target="_blank" rel="noreferrer" href={url}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <p>
             {icons.map((item: string, index: number) =>
              <img src={item} key={index} alt="Icônes des langages utilisés" />)} 
          </p>
        </h2>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}
