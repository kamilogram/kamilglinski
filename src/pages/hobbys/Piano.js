import React from 'react';
import stareMiasto from '../../images/stareMiasto.jpg';

const Piano = () => (
  <section className='withLeftHeader doubledHeader'>
    <h1>nauką gry na pianinie</h1>
    <article>
      <br />
      <div>
        Jestem samoukiem i bardzo chciałbym posiąść umiejętność improwizacji gry na pianine.
      </div>
      <br />
      <img className='image80 smaller' src={stareMiasto} alt='Pianino na Starym Mieście'/>
    </article>
  </section>
)

export default Piano;
