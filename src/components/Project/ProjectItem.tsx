import './Project.css';
import { ProjectType } from '@/types/project';
import { FiGithub } from 'react-icons/fi';
import Image from 'next/image';

export default function ProjectItem({ img, title, description, url, icons }: ProjectType) {
  return (
    <div className='project-item'>
      <div className='bloc-img'>
        <a target='_blank' rel='noreferrer' href={url[1]} aria-label='project url link'>
          <Image src={img} alt="Miniature de projet que j'ai pu réaliser" />
        </a>
      </div>

      <div className='content-project'>
        <h2 className='project-title'>
          <span className='span-title'> {title}</span>
          <a target='_blank' rel='noreferrer' href={url[0]} aria-label='Github account'>
            <FiGithub />
          </a>
          <p>
            {icons.map((item: string, index: number) => (
              <Image src={item} key={index} alt='Icônes des langages utilisés' />
            ))}
          </p>
        </h2>
        <p className='project-description'>{description}</p>
      </div>
    </div>
  );
}
