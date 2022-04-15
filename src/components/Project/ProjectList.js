import React, { useRef, useEffect } from "react";
import "./Project.css";
import ProjectItem from "./ProjectItem";
import WebgestionV2 from "../../img/webp/webgestion-v2.webp";
import ReactAlbum from "../../img/webp/react-album.webp";
import Pronotes from "../../img/webp/pronote.webp";
import GitHubAPI from "../../img/webp/github-api.webp";
import TodoListPWA from "../../img/webp/todolist-pwa.webp";
import Chat from "../../img/webp/chat.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function ProjectList() {
  let ref = useRef([]);

  const addToRef = (element) => {
    if (element && !ref.current.includes(element)) {
      ref.current.push(element);
    }
  };

  let data = [
    {
      title: "Webgestion V2",
      description:
        "Répond aux demandes d'un professeur (admin) et/ou d'un élève. Réalisé en Symfony",
      img: WebgestionV2,
      url: "https://github.com/mena0018/WebgestionV2",
    },
    {
      title: "Music Explorer",
      description:
        "Permet d'afficher et de naviguer au travers d'albums de musique. Réalisé avec React et React-Routeur.",
      img: ReactAlbum,
      url: "https://github.com/mena0018/React-Album-Explorateur",
    },
    {
      title: "Pronotes",
      description:
        "Permet de classer et trier des notes. Réalisé avec Node.js.",
      img: Pronotes,
      url: "https://github.com/mena0018/Pronotes-JS",
    },
    {
      title: "GitHub API",
      description:
        "Permet d'afficher les informations d'un profil GitHub à partir de son pseudo.",
      img: GitHubAPI,
      url: "https://github.com/mena0018/GitHubAPI",
    },
    {
      title: "TodoList PWA",
      description: "Permet de se synchroniser avec plusieurs appareils et dispose d'un mode hors ligne.",
      img: TodoListPWA,
      url: "https://github.com/mena0018/TodoList-Progressive-Web-App",
    },
    {
      title: "Chat-Socket.Io",
      description:
        "Permet de choisir un pseudo, rejoindre une conversation et d'envoyer des messages. Réalisé avec Node.js et Socket.Io",
      img: Chat,
      url: "https://github.com/mena0018/Chat-Socket.Io",
    },
  ];

  const slideX = (element, valeurDepart, delay, duration) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: valeurDepart || -1000,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.4,
        duration: duration || 0.6,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom right",
        },
      }
    );
  };

  useEffect(() => {
    slideX(ref.current[0], 1000);
    slideX(ref.current[1]);
    slideX(ref.current[2], 1000);
    slideX(ref.current[3]);
    slideX(ref.current[4], 1000);
    slideX(ref.current[5]);
  }, []);

  return (
    <div className="container container-top" id="realisations">
      <h1 className="title">Réalisations</h1>

      <div className="container-realisations">
        <div ref={addToRef}>
          <ProjectItem
            title={data[0].title}
            description={data[0].description}
            img={data[0].img}
            githubURL={data[0].url}
          />
        </div>

        <div ref={addToRef}>
          <ProjectItem
            title={data[1].title}
            description={data[1].description}
            img={data[1].img}
            githubURL={data[1].url}
          />
        </div>

        <div ref={addToRef}>
          <ProjectItem
            title={data[2].title}
            description={data[2].description}
            img={data[2].img}
            githubURL={data[2].url}
          />
        </div>

        <div ref={addToRef}>
          <ProjectItem
            title={data[3].title}
            description={data[3].description}
            img={data[3].img}
            githubURL={data[3].url}
          />
        </div>

        <div ref={addToRef}>
          <ProjectItem
            title={data[4].title}
            description={data[4].description}
            img={data[4].img}
            githubURL={data[4].url}
          />
        </div>

        <div ref={addToRef}>
          <ProjectItem
            title={data[5].title}
            description={data[5].description}
            img={data[5].img}
            githubURL={data[5].url}
          />
        </div>
      </div>
    </div>
  );
}
