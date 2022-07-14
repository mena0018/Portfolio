import WhatsApp from "../img/icones/contact/whatsapp.svg";
import Gmail from "../img/icones/contact/google-gmail.svg";
import Linkedin from "../img/icones/contact/linkedin.svg";


export const dataContact: Record<string, unknown> = {
  FR: [
    "Me contacter",
    {
      icon: Gmail,
      name: "Mail",
      info: "rabie.menad07@gmail.com",
      link: "mailto:rabie.menad07@gmail.com",
      contact: "Écris moi"
    },
    {
      icon: Linkedin,
      name: "Linkedin",
      info: "Rabie Menad",
      link: "https://www.linkedin.com/in/rabie-menad/",
      contact: "Écris moi"
    },
    {
      icon: WhatsApp,
      name: "WhatsApp",
      info: "06-67-86-96-37",
      link: "https://wa.me/+33667869637",
      contact: "Écris moi"
    },
  ],

  EN: [
     "Talk to me",
    {
      icon: Gmail,
      name: "Mail",
      info: "rabie.menad07@gmail.com",
      link: "mailto:rabie.menad07@gmail.com",
      contact: "Write me"
    },
    {
      icon: Linkedin,
      name: "Linkedin",
      info: "Rabie Menad",
      link: "https://www.linkedin.com/in/rabie-menad/",
      contact: "Write me"
    },
    {
      icon: WhatsApp,
      name: "WhatsApp",
      info: "06-67-86-96-37",
      link: "https://wa.me/+33667869637",
      contact: "Write me"
    },
  ],
};
