import WebgestionV2 from "../img/webp/projects/webgestion-v22.webp";
import ReactAlbum from "../img/webp/projects/react-album.webp";
import TodoListPWA from "../img/webp/projects/todolist-pwa.webp";
import Chat from "../img/webp/projects/chat.webp";


import javascript from "../img/icones/langages/javascript.svg";
import react from "../img/icones/langages/react.svg";
import nodejs from "../img/icones/langages/nodejs.svg";
import socketIo from "../img/icones/langages/socket.io.svg";
import pwa from "../img/icones/langages/pwa.svg";
import symfony from "../img/icones/langages/symfony.svg";
import mysql from "../img/icones/langages/mysql.svg";
import { ProjectType } from '../types/project';


let css  = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
let html = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";


export const dataProjects: Record<string, ProjectType[]> = {
  FR: [
    {
      title: "Webgestion V2",
      description: "Répond aux demandes d'un professeur (admin) et/ou d'un élève. Réalisé en Symfony",
      img: WebgestionV2,
      url: "https://github.com/mena0018/WebgestionV2",
      icons:  [ symfony, mysql, javascript, css ]
    },
    {
      title: "Music Explorer",
      description: "Permet d'afficher et de naviguer au travers d'albums de musique. Réalisé avec React et React-Routeur.",
      img: ReactAlbum,
      url: "https://github.com/mena0018/React-Album-Explorateur",
      icons:  [ react, javascript, css ]
    },
    {
      title: "TodoList PWA",
      description: "Permet de se synchroniser avec plusieurs appareils et dispose d'un mode hors ligne.",
      img: TodoListPWA,
      url: "https://github.com/mena0018/TodoList-Progressive-Web-App",
      icons:  [ html, css, javascript, pwa ]
    },
    {
      title: "Chat-Socket.Io",
      description: "Permet de choisir un pseudo, rejoindre une conversation et d'envoyer des messages. Réalisé avec Node.js et Socket.Io",
      img: Chat,
      url: "https://github.com/mena0018/Chat-Socket.Io",
      icons:  [ javascript, nodejs, socketIo, css ]
    },
  ],
  EN: [
    {
      title: "Webgestion V2",
      description: "Responds to requests from a teacher (admin) and/or a student. Made with Symfony",
      img: WebgestionV2,
      url: "https://github.com/mena0018/WebgestionV2",
      icons:  [ symfony, mysql, javascript, css ] 
    },
    {
      title: "Music Explorer",
      description:"Allows to display and navigate through music albums. Made with React and React-Router.",
      img: ReactAlbum,
      url: "https://github.com/mena0018/React-Album-Explorateur",
      icons:  [ react, javascript, css ]
    },
    {
      title: "TodoList PWA",
      description:
        "Allows you to synchronize with multiple devices and has an offline mode.",
      img: TodoListPWA,
      url: "https://github.com/mena0018/TodoList-Progressive-Web-App",
      icons:  [ html, css, javascript, pwa ]
    },
    {
      title: "Chat-Socket.Io",
      description:
        "Allows you to choose a nickname, join a conversation and send messages. Made with Node.js and Socket.Io.",
      img: Chat,
      url: "https://github.com/mena0018/Chat-Socket.Io",
      icons:  [ javascript, nodejs, socketIo, css ]
    },
  ]
};
