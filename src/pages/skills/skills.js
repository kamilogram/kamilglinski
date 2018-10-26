import React from 'react';
import Dotter from '../../components/dotter.js';

const skills = () => (
  <section>
    <h1>Umiejętności</h1>
    <article className='halfArticle withInlineMarkers'>
      <header>front-end</header>
      <div>
        <span>HTML5 + CSS3</span>
        <Dotter value={8}/>
      </div>
      <div>
        <span>Java Script</span>
        <Dotter value={8}/>
      </div>
      <div>
        <span>ES6 (ECMAScript 2015)</span>
        <Dotter value={8}/>
      </div>
      <div>
        <span>React</span>
        <Dotter value={8}/>
      </div>
      <div>
        <span>Redux</span>
        <Dotter value={7}/>
      </div>
    </article>
  </section>
)

export default skills;
