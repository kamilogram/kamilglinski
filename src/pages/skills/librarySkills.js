import React from 'react';

const LineSlide = ({ value }) => (
  <div className='LineSlideContainer'>
    <div className='lineSlideMax'/>
    <div style={{width: `${value}%`}} className='lineSlide'/>
  </div>
)

const librarySkills = () => (
  <section>
    <article>
      <header>biblioteki js</header>
      <div>
        <span>flow</span>
        <LineSlide value={80} />
      </div>
      <div>
        <span>lodash</span>
        <LineSlide value={70} />
      </div>
      <div>
        <span>mori</span>
        <LineSlide value={80} />
      </div>
      <div>
        <span>jQuery</span>
        <LineSlide value={50} />
      </div>
    </article>
  </section>
)

export default librarySkills;
