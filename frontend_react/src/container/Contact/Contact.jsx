import React from 'react'

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Contact.scss';

const Contact = () => {

  return (
    <>
  
    <div className="app__contact">
    <h2 className="head-text"> Feel free to <span>connect with me!</span> </h2>

    
    <div className="app__contact-cards">
      {/* Email contact card */}
      <a href="mailto:alexjoonkim02@gmail.com" className="app__contact-card">
        <img src={images.email} alt="email"/>
        <div className="p-text app__contact-section">Email</div>
      </a>

      {/* LinkedIn contact card */}
      <a href="https://www.linkedin.com/in/alex-kim-917bb81a5" className="app__contact-card">
        <img src={images.linkedin} alt="LinkedIn"/>
        <div className="p-text app__contact-section">LinkedIn</div>
      </a>

      {/* GitHub contact card */}
      <a href="https://github.com/ajk3158" className="app__contact-card">
        <img src={images.github} alt="GitHub"/>
        <div className="p-text app__contact-section">GitHub</div>
      </a>
    </div>
    </div>
    </>
  )
}

export default AppWrap( 
  MotionWrap(Contact, 'app__contact'),
  'Contact');
