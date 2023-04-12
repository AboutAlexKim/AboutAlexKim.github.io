import React, { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { works } from '../index';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Work.scss';

const Work = () => {

  //Sets component's activeFilter state to none 
  const [activeFilter, setActiveFilter] = useState('none');
  //Sets component's animateCard state to y: 0, opacity: 1 
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  //Sets component's filterWork state to an empty array 
  const [filterWork, setFilterWork] = useState([]);

  //Defines work filter functionality 
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tag.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text header-space">
        My Creative <span>Portfolio</span> Section
      </h2>

      {/* Defines the work filter */}
      <div className="app__work-filter">
        {['Front-End', 'Back-End', 'Full-Stack', 'Data Science', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Populates Work page with portfolio items */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              {/* portfolio item picture with accompanying front-end/animations */}
              <img src={work.imgUrl} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                {/* Link to Portfolio item with accompanying front-end */}
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                
              </motion.div>

            </div>

            {/* Work portfolio item title, description, and tag */}
            <div className="app__work-content app__flex">
              <h4 className="bold-text app__work-title">{work.title}</h4>
              <p className="p-text app__work-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text app__work-text">{work.tag[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap( 
  MotionWrap(Work, 'app__works'),
  'work');