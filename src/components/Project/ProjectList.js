import React, { useEffect } from "react";
import "./Project.css";
import ProjectItem from "./ProjectItem";
import useSlideX from "../../components/Hook/useSlideX";
import useAddRef from "../../components/Hook/useAddRef";
import {data} from '../constants'


export default function ProjectList() {
  const { ref, addToRef } = useAddRef();
  const slideX = useSlideX();

  useEffect(() => {
    slideX(ref.current[0], 1000);
    slideX(ref.current[1]);
    slideX(ref.current[2], 1000);
    slideX(ref.current[3]);
    slideX(ref.current[4], 1000);
    slideX(ref.current[5]);
  }, [slideX, ref]);

  return (
    <div className="container container-top" id="realisations">
      <h1 className="title">Réalisations</h1>

      <div className="container-realisations">
        {data.map((item, index) => (
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
