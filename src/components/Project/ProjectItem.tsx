import './Project.css';
import { ProjectWithIndex } from '@/types/index';
import { FiGithub } from 'react-icons/fi';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideIn } from 'src/utils/motion';

export default function ProjectItem({
  img,
  title,
  description,
  url,
  icons,
  index,
}: ProjectWithIndex) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className='project-item'
      variants={slideIn(isEven ? 'left' : 'right', 'tween', 0.1 * index, 1)}
    >
      <div className='bloc-img'>
        <a target='_blank' rel='noreferrer' href={url[1]} aria-label='project url link'>
          <Image priority src={img} alt="Miniature de projet que j'ai pu réaliser" />
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
              <Image priority src={item} key={index} alt='Icônes des langages utilisés' />
            ))}
          </p>
        </h2>
        <p className='project-description'>{description}</p>
      </div>
    </motion.div>
  );
}
