import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

import './Home.scss';

//Technology circles animation state
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Home = () => {
  return (
    <div id="home" className="app__home app__flex">
      {/* Home text badges with animations */}
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="app__home-info"
      >
        <div className="app__home-badge">
          <div className="badge-cmp app__flex">
             <span>👋</span>
             <div style={{ marginLeft: 20 }}>
              <p className="p-text app__home-text">Hello, I am</p>
              <h1 className="head-text app__home-title">Alex Kim</h1>
             </div>
          </div>

          <div className="tag-cmp app__flex">
          <p className="p-text app__home-text">Web Developer</p>
          <p className="p-text app__home-text">Software Engineer</p>
          <p className="p-text app__home-text">Internet Nerd</p>
          </div>
        </div>
      </motion.div>

      {/* Main profile picture/background with animation */}
      <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1, delayChildren: 0.5 }}
      className="app__home-img"
      >
        <img src={images.profile} alt="profile_bg"/>
        <motion.img
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="overlay_circle"
        src={images.circle}
        alt="profile_circle"
        />

      </motion.div>

      {/* Technology circles with animation */}
      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__home-circles"
      >
        {[images.react, images.java, images.php].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>


    </div>
  )
}

export default AppWrap(Home, 'home');