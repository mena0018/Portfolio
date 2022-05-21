import WebgestionV2 from "../img/webp/webgestion-v22.webp";
import ReactAlbum from "../img/webp/react-album.webp";
import Pronotes from "../img/webp/pronote.webp";
import GitHubAPI from "../img/webp/github-api.webp";
import TodoListPWA from "../img/webp/todolist-pwa.webp";
import Chat from "../img/webp/chat.webp";
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiCss3, SiSymfony, SiJest, SiPwa, SiSocketdotio, SiMysql, SiHtml5 } from "react-icons/si";


export const dataProjects = {
  FR: [
    {
      title: "Webgestion V2",
      description:
        "Répond aux demandes d'un professeur (admin) et/ou d'un élève. Réalisé en Symfony",
      img: WebgestionV2,
      url: "https://github.com/mena0018/WebgestionV2",
      icons:  [
               <SiSymfony     color="#ececec"/>,
               <SiMysql       color="#006c80"/>, 
               <SiJavascript  color="#ffcf68" />, 
               <SiCss3        color="0080ff"/>,
      ]
    },
    {
      title: "Music Explorer",
      description:
        "Permet d'afficher et de naviguer au travers d'albums de musique. Réalisé avec React et React-Routeur.",
      img: ReactAlbum,
      url: "https://github.com/mena0018/React-Album-Explorateur",
      icons: [ 
              <FaReact       color="#85c8d0"/>,
              <SiJavascript  color="#ffcf68"/>,
              <SiCss3        color="0080ff"/> 
      ]
    },
    {
      title: "Pronotes",
      description:
        "Permet de classer et trier des notes. Tests unitaires réalisés avec Jest.",
      img: Pronotes,
      url: "https://github.com/mena0018/Pronotes-JS",
      icons: [ 
              <SiJavascript  color="#ffcf68"/>, 
              <FaNodeJs      color="49b675"/>, 
              <SiJest        color="cc0000"/>,
              <SiCss3        color="0080ff"/>
      ]
    },
    {
      title: "GitHub API",
      description:
        "Permet d'afficher les informations d'un profil GitHub à partir de son pseudo.",
      img: GitHubAPI,
      url: "https://github.com/mena0018/GitHubAPI",
      icons: [
              <SiHtml5      color="#e3622f"/>,
              <SiCss3       color="0080ff" />, 
              <SiJavascript color="#ffcf68" />
      ]

    },
    {
      title: "TodoList PWA",
      description:
        "Permet de se synchroniser avec plusieurs appareils et dispose d'un mode hors ligne.",
      img: TodoListPWA,
      url: "https://github.com/mena0018/TodoList-Progressive-Web-App",
      icons: [
              <SiHtml5       color="#e3622f" />, 
              <SiCss3        color="0080ff"/>,
              <SiJavascript  color="#ffcf68" />,
              <SiPwa         color="#6b75b8"/>
      ]

    },
    {
      title: "Chat-Socket.Io",
      description:
        "Permet de choisir un pseudo, rejoindre une conversation et d'envoyer des messages. Réalisé avec Node.js et Socket.Io",
      img: Chat,
      url: "https://github.com/mena0018/Chat-Socket.Io",
      icons: [
              <SiJavascript   color="#ffcf68"/>,
              <FaNodeJs       color="49b675"/>, 
              <SiSocketdotio  color="#ececec"/>, 
              <SiCss3         color="0080ff"/>
      ]
    },
  ],
  EN: [
   {
     title: "Webgestion V2",
     description:
       "Responds to requests from a teacher (admin) and/or a student. Made with Symfony",
     img: WebgestionV2,
     url: "https://github.com/mena0018/WebgestionV2",
     icons:  [
              <SiSymfony     color="#ececec"/>,
              <SiMysql       color="#006c80"/>, 
              <SiJavascript  color="#ffcf68" />, 
              <SiCss3        color="0080ff"/>,
]    },
   {
     title: "Music Explorer",
     description:
       "Allows to display and navigate through music albums. Made with React and React-Router.",
     img: ReactAlbum,
     url: "https://github.com/mena0018/React-Album-Explorateur",
     icons: [ 
            <FaReact       color="#85c8d0"/>,
            <SiJavascript  color="#ffcf68"/>,
            <SiCss3        color="0080ff"/> 
]    },
   {
     title: "Pronotes",
     description:
       "Allows to classify and sort notes. Unit test made with Jest.",
     img: Pronotes,
     url: "https://github.com/mena0018/Pronotes-JS",
     icons: [ 
            <SiJavascript  color="#ffcf68"/>, 
            <FaNodeJs      color="49b675"/>, 
            <SiJest        color="cc0000"/>,
            <SiCss3        color="0080ff"/>
]    },
   {
     title: "GitHub API",
     description:
       "Allows to display the information of a GitHub profile from its nickname.",
     img: GitHubAPI,
     url: "https://github.com/mena0018/GitHubAPI",
     icons: [
            <SiHtml5      color="#e3622f"/>,
            <SiCss3       color="0080ff" />, 
            <SiJavascript color="#ffcf68" />
]    },
   {
     title: "TodoList PWA",
     description:
       "Allows you to synchronize with multiple devices and has an offline mode.",
     img: TodoListPWA,
     url: "https://github.com/mena0018/TodoList-Progressive-Web-App",
     icons: [
            <SiHtml5       color="#e3622f" />, 
            <SiCss3        color="0080ff"/>,
            <SiJavascript  color="#ffcf68" />,
            <SiPwa         color="#6b75b8"/>
]    },
   {
     title: "Chat-Socket.Io",
     description:
       "Allows you to choose a nickname, join a conversation and send messages. Made with Node.js and Socket.Io.",
     img: Chat,
     url: "https://github.com/mena0018/Chat-Socket.Io",
     icons: [
            <SiJavascript   color="#ffcf68"/>,
            <FaNodeJs       color="49b675"/>, 
            <SiSocketdotio  color="#ececec"/>, 
            <SiCss3         color="0080ff"/>
]    },
 ]
};
