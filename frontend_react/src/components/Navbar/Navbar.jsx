import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  //Sets component's toggle state to false 
  const [toggle, setToggle] = useState(false);


  return (
    <nav className="app__navbar">
      {/* Logo and full size Navbar links */}
      <div className="app__navbar-logo">
        <Link to="/">
        <img src={images.logo} alt="logo" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'experience', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <Link to={`${item}`}>{item}</Link>
          </li>
        ))}
      </ul>


      {/* Navbar button and menu with links once screen is smaller */}
      <div className="app__navbar-menu">
        <HiMenu onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
            {['home', 'about', 'work', 'experience', 'contact'].map((item) => (
              <li key={item}>
                <Link to={`${item}`} onClick={() => setToggle(false)}>{item}</Link>
              </li>
            ))}
            </ul>
          </motion.div>
        )}

      </div>
    </nav>
  );
};

export default Navbar