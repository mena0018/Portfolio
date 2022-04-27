import React, { useEffect, useContext } from "react";
import { Context } from "../../context/langContext";
import "./Project.css";
import ProjectItem from "./ProjectItem";
import useSlideX from "../../components/Hook/useSlideX";
import useSlideY from "../../components/Hook/useSlideY";
import useAddRef from "../../components/Hook/useAddRef";
import { dataProjects } from '../../constants/project'
import { dataTitle } from "../../constants/title"


export default function ProjectList() {
  const { ref, addToRef } = useAddRef();
  const {lang} = useContext(Context);
  const slideX = useSlideX();
  const slideY = useSlideY();

  useEffect(() => {
    slideY(ref.current[0]);
    slideX(ref.current[1]);
    slideX(ref.current[2], 1000);
    slideX(ref.current[3]);
    slideX(ref.current[4], 1000);
    slideX(ref.current[5]);
    slideX(ref.current[6], 1000);
  }, [slideX, slideY, ref]);

  return (
    <div className="container container-top" id="realisations">
      <h1 className="title" ref={addToRef}>{dataTitle[lang]['realisations']}</h1>

      <div className="container-realisations">
        {dataProjects[lang].map((item, index) => (
          <div ref={addToRef} key={index}>
            <ProjectItem
              title={item.title}
              description={item.description}
              img={item.img}
              githubURL={item.url}
            />
          </div>
        ))}
      </div>
    </div>
  );    
}
