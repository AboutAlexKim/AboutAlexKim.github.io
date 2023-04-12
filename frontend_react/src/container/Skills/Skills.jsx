import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../index';
import { resume } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';

const Skills = () => {
  return (
    <>
      <h2 className="head-text">My <span>Skills</span> & <span>Experience</span></h2>

      <div className="app__skills-container">
        {/* Skills list */}
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
            whileInView={{opacity: [0, 1]}}
            transition={{ duraiton: 0.5 }}
            className="app__skills-item app__flex"
            key={skill.name}
            >
              <div className="app__icon app__flex" style={{ backgroundColor: skill.bgColor}}>
                <img src={skill.icon} alt={skill.name}/>
              </div>

              <p className="p-text">{skill.name}</p>

            </motion.div>
          ))}
        </motion.div>
        {/* Experience section (Resume) */}
        <motion.div className="app__skills-exp">
          <embed 
          src={resume + "#view=FitH"}
          type="application/pdf"
          />

        </motion.div>
      </div>
       </>
  )
}

export default AppWrap( 
  MotionWrap(Skills, 'app__skills'),
  'Skills');