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
        <span>lodash</span>
        <LineSlide value={70} />
      </div>
      <div>
        <span>jQuery</span>
        <LineSlide value={50} />
      </div>
      <div>
        <span>Styled Components</span>
        <LineSlide value={70} />
      </div>
      <div>
        <span>storybook</span>
        <LineSlide value={50} />
      </div>
    </article>
  </section>
)

export default librarySkills;
