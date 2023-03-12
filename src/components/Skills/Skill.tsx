import './Skills.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { SkillType } from '@/types/index';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

export default function Skill({ name, stacks }: SkillType) {
  return (
    <div className='wrapper'>
      <div className='border-gradient' />

      <div className='container-skill'>
        <motion.h2 className='subtitle' variants={fadeIn('down', 'tween', 0, 1)}>
          {name}
        </motion.h2>
        <ul className='list-skills'>
          {stacks.map((item: string, index: number) => (
            <li key={index} className='item-skill'>
              <motion.div
                className='content-stack'
                variants={fadeIn('down', 'tween', 0.1 * index, 1)}
              >
                <div>
                  <BsFillPatchCheckFill />
                </div>
                <div className='langage-level'>
                  <p>{item}</p>
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
