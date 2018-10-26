import React from 'react';
import react from '../../images/react.png';
import redux from '../../images/redux.png';
import js from '../../images/js.png';
import html5css3 from '../../images/html5css3.png';
import jsEs6 from '../../images/JS_ES6.png';

const articleMain = () => (
  <article className='withTextImages verticalJustified closeEnough'>
    <h6>Technologie / frameworki</h6>
    <div>
      <span>React</span>
      <div className='imgContainer'>
        <img
          className='textLogo react'
          src={react}
        alt='react logo' />
      </div>
    </div>
    <div>
      <span>Redux</span>
      <div className='imgContainer'>
        <img
          className='textLogo'
          src={redux}
        alt='redux logo' />
      </div>
    </div>
    <div>
      <span>JS ES6</span>
      <div className='imgContainer'>
        <img
          className='textLogo'
          src={js}
        alt='js logo' />
        <img
          className='textLogo'
          src={jsEs6}
        alt='es6 logo' />
      </div>
    </div>
    <div>
      <span>HTML5 + CSS3</span>
      <div className='imgContainer'>
        <img
          className='textLogo'
          src={html5css3}
        alt='html5 + css3 logo' />
      </div>
    </div>
  </article>
)

export default articleMain;
