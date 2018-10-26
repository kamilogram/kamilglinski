import React from 'react';
import stareMiasto from '../../images/stareMiasto.jpg';

const piano = () => (
  <section className='withLeftHeader doubledHeader'>
    <h1>nauką gry na pianinie</h1>
    <article>
      <div>
        Jestem samoukiem i bardzo chciałbym się nauczyć improwizować na pianine. Do tego muszę poznać wszystkie tonacje i akordy. Moim celem jest kiedyś zagrać w Studiu im. Agnieszki Osieckiej w radiowej Trójce!
      </div>
      <img className='image80 smaller' src={stareMiasto} alt='Pianino na Starym Mieście'/>
    </article>
  </section>
)

export default piano;
