import React from 'react';
import orbitals from '../../../images/orbitals.png';

const IMG_TITLE = 'Screen z aplikacji do wyświetlania orbitali atomowych';

const Uwb1 = () => (
  <section className='withLeftHeader doubledHeader'>
    <h1>Uniwersytet w Białymstoku</h1>
    <article className='descSections verticalAligned'>
      <div>
        <div>kierunek</div>
        <b>Fizyka</b>
      </div>
      <div>
        <div>uzyskany tytuł</div>
        <div>Licencjat</div>
      </div>
      <div>
        <div>tytuł pracy licencjackiej</div>
        <div>"Orbitale atomowe – obrazowanie w języku JAVA."</div>
      </div>
      <div>
        <div>czas trwania</div>
        <div>październik 2008 - lipiec 2011</div>
      </div>
      <div className='imagesWeb'>
        <img
          alt={IMG_TITLE}
          title={IMG_TITLE}
          className='image100'
          src={orbitals}
        />
      </div>
    </article>
  </section>
)

export default Uwb1;
