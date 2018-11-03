import React from 'react';
import { DesktopFooter } from '../../pages';

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
      </div>
      <DesktopFooter />
    </article>
  </section>
)

export default Ending;
