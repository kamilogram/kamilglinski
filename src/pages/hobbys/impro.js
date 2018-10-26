import React from 'react';
import impro1 from '../../images/impro1.jpg';
import impro2 from '../../images/impro2.jpg';
import impro3 from '../../images/impro3.jpg';

const impro = () => (
  <section className='withLeftHeader doubledHeader'>
    <h1>improwizacją sceniczną</h1>
    <article>
      <div>
        <div>
          Na tzw. "impro" trafiłem przypadkiem na początku 2016 roku i od tego czasu aktywnie uczestniczę w tego typu wydarzeniach.
        </div>
        <div className='imagesWeb'>
          <img src={impro1} alt='impro 1'/>
          <img src={impro2} alt='impro 2'/>
        </div>
        <div>
          Uczęszczałem na kursy do Szkoły Impro, Impro.lab'u, do szkoły "Só". Obecnie jestem członkiem jednej z warszawskich grup improwizacyjnych. Niemal w każdy czwartek biorę też czynny udział w "dżemach impro".
        </div>
        <div className='imagesWeb'>
          <img src={impro3} alt='impro 3'/>
        </div>
      </div>
    </article>
  </section>
)

export default impro;
