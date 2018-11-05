import React from 'react';
import { Footer } from '../../pages';

const Ending = () => (
  <section className='withLeftHeader'>
    <h1>Dziękuję</h1>
    <article className='descSections verticalJustified verticalAligned'>
      <div>
        <span>Zapraszam do kontaktu:</span>
        <div>
          <a href="mailto:glinski.kamil1985@gmail.com">
            glinski.kamil1985@gmail.com
          </a>
        </div>
        <div>
          <a href="tel:505443406">505 443 406</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/kamilglinski" target='_blank' rel='noopener noreferrer'>LinkedIn</a>
        </div>
      </div>
      <Footer />
    </article>
  </section>
)

export default Ending;
