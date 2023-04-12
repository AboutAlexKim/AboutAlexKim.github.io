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
      <div className="app__contact-card">
        <img src={images.email} alt="email"/>
        <a href="mailto:alexjoonkim02@gmail.com" className="p-text app__contact-section">Email</a>
      </div>

      {/* Phone Number contact card */}
      <div className="app__contact-card">
        <img src={images.mobile} alt="mobile"/>
        <a href="tel: +1 (703) 380-5515" className="p-text app__contact-section">+1 (703) 380-5515</a>
      </div>

      {/* LinkedIn contact card */}
      <div className="app__contact-card">
        <img src={images.linkedin} alt="LinkedIn"/>
        <a href="tel: +1 (703) 380-5515" className="p-text app__contact-section">LinkedIn</a>
      </div>

      {/* GitHub contact card */}
      <div className="app__contact-card">
        <img src={images.github} alt="GitHub"/>
        <a href="tel: +1 (703) 380-5515" className="p-text app__contact-section">GitHub</a>
      </div>
    </div>
    </div>
    </>
  )
}

export default AppWrap( 
  MotionWrap(Contact, 'app__contact'),
  'Contact');