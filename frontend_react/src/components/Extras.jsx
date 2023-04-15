import React, { useState } from 'react'

import { MdDarkMode, MdLightMode } from 'react-icons/md';

const LightDarkMode = () => {
  //sets component's light state to true
  const [light, setLightState ] = useState(true);
  //Adds light/dark mode button functionality
  const handleChange = () => {
    var r = document.querySelector(':root');
    //Changes back to light mode
    if(light == 0){
      r.style.setProperty('--primary-color', '#edf2f8');
      r.style.setProperty('--secondary-color', '#313bac');
      r.style.setProperty('--primary-text-color', '#030303');
      r.style.setProperty('--secondary-text-color', '#6b7688');
      r.style.setProperty('--transition-color', '0 0 20px rgba(0,0,0, 0.2)');
      setLightState(light => true);
    }
    //changes to dark mode
    else{
      r.style.setProperty('--primary-color', '#252324');
      r.style.setProperty('--secondary-color', '#FE9CA4');
      r.style.setProperty('--primary-text-color', '#FFFDFA');
      r.style.setProperty('--secondary-text-color', '#D3D3D3');
      r.style.setProperty('--transition-color', '0 0 20px rgba(255, 255, 255)');
      setLightState(light => false);
    }
  }
  return (
    <div className="app__social">
        <div 
        onClick={handleChange}
        >
            {light ? <MdDarkMode/> : <MdLightMode/>}
        </div>
    </div>
  )
}

export default LightDarkMode