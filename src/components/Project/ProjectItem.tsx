import "./Project.css";
import { ProjectType } from "../../types/project";
import { FiGithub } from "react-icons/fi";

export default function ProjectItem({
  img,
  title,
  description,
  url,
  icons,
}: ProjectType) {
  return (
    <div className="project-item">
      <div className="bloc-img">
        <a target="_blank" rel="noreferrer" href={url[1]}>
          <img src={img} alt="Miniature de projet que j'ai pu réaliser" />
        </a>
      </div>

      <div className="content-project">
        <h2 className="project-title">
          <span className="span-title"> {title}</span>
          <a target="_blank" rel="noreferrer" href={url[0]}>
            <FiGithub />
          </a>
          <p>
            {icons.map((item: string, index: number) => (
              <img src={item} key={index} alt="Icônes des langages utilisés" />
            ))}
          </p>
        </h2>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}
