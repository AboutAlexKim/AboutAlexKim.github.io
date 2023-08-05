import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../index';
import { resume, images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';

const Skills = () => {
  const [windowSize, setWindowSize] = useState(window.visualViewport.width)
  useEffect(() => {
    setWindowSize(window.visualViewport.width);
  })

  return (
    <>
      <h2 className="head-text">My <span>Skills</span> & <span>Resume Experience</span></h2>

      <div className="app__skills-container">
        {/* Skills list */}
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duraiton: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__icon app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={skill.icon} alt={skill.name} />
              </div>

              <p className="p-text">{skill.name}</p>

            </motion.div>
          ))}
        </motion.div>
        {/* Experience section (Resume) */}
        <motion.div className="app__skills-exp">

          {windowSize > 1200 ? <embed
            src={resume + "#view=FitH"}
            type="application/pdf"
          /> :
            <a href={resume} className="app__resume-card">
              <img src={images.resume} alt="Resume" />
              <div className="p-text app__resume-section">Resume</div>
            </a>}

        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'Skills');