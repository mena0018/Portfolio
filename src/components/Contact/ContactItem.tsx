import Image from 'next/image';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { ContactType } from '@/types/contact';

export default function ContactItem({ icon, name, info, link, contact }: ContactType) {
  return (
    <>
      <p>
        <Image src={icon} alt='icônes WhatsApp, Linkedin ou Gmail' />
      </p>
      <p>{name}</p>
      <p>{info}</p>
      <a target='_blank' rel='noreferrer noopener' href={link}>
        {contact} <BsFillArrowRightCircleFill />
      </a>
    </>
  );
}
