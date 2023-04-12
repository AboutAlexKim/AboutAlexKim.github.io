import React from 'react';
import { Extras } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    //General App Wrapper
    <>
    <div id={idName} className={`app__container ${classNames}`}>
      <Extras/>
        <div className="app__wrapper app__flex">
            <Component/>
        </div>
    </div>
    </>
  )
}

export default AppWrap;