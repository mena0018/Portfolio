import Malt from 'public/img/icones/contact/malt.svg';
import Gmail from 'public/img/icones/contact/google-gmail.svg';
import Linkedin from 'public/img/icones/contact/linkedin.svg';

export const dataContact: Record<string, unknown> = {
  FR: [
    'Me contacter',
    {
      icon: Gmail,
      name: 'Mail',
      info: 'rabie.menad07@gmail.com',
      link: 'mailto:rabie.menad07@gmail.com',
      contact: 'Écris moi',
    },
    {
      icon: Linkedin,
      name: 'Linkedin',
      info: 'Rabie Menad',
      link: 'https://www.linkedin.com/in/rabie-menad/',
      contact: 'Écris moi',
    },
    {
      icon: Malt,
      name: 'Malt',
      info: 'Freelance',
      link: 'https://www.malt.fr/profile/rabiemenad',
      contact: 'Écris moi',
    },
  ],

  EN: [
    'Talk to me',
    {
      icon: Gmail,
      name: 'Mail',
      info: 'rabie.menad07@gmail.com',
      link: 'mailto:rabie.menad07@gmail.com',
      contact: 'Write me',
    },
    {
      icon: Linkedin,
      name: 'Linkedin',
      info: 'Rabie Menad',
      link: 'https://www.linkedin.com/in/rabie-menad/',
      contact: 'Write me',
    },
    {
      icon: Malt,
      name: 'Malt',
      info: 'Freelance',
      link: 'https://www.malt.fr/profile/rabiemenad',
      contact: 'Write me',
    },
  ],
};
