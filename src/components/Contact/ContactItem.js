import { BsFillArrowRightCircleFill } from 'react-icons/bs';

export default function ContactItem({icon, name, info, link, contact}) {
  return (
    <div className="contact-item">
        <p>{icon}</p>
        <p>{name}</p>
        <p>{info}</p>
        <a target="_blank" rel="noreferrer noopener" href={link}>{contact} <BsFillArrowRightCircleFill /> </a>
    </div>
  )
}
