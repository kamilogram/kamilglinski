import React from 'react';
import impro1 from '../../images/impro1.jpg';
import impro2 from '../../images/impro2.jpg';
import impro3 from '../../images/impro3.jpg';

const Impro = () => (
  <section className='withLeftHeader doubledHeader'>
    <h1>improwizacją sceniczną</h1>
    <article>
      <br />
      <div>
        <div>
          Na tzw. "impro", czyli spektakle bez scenariusza powstające na oczach widzów, trafiłem na początku 2016 roku. Od tego czasu aktywnie biorę udział w tego typu wydarzeniach, zarówno jako widz jak i uczestnik.
        </div>
        <div className='imagesWeb'>
          <img src={impro1} alt='impro 1'/>
          <img src={impro2} alt='impro 2'/>
        </div>
        <div>
          Uczęszczałem na kursy do Szkoły Impro, Impro.labu, do szkoły "Só". Obecnie należę do jednej z warszawskich grup improwizacyjnych.
        </div>
        <div className='imagesWeb'>
          <img src={impro3} alt='impro 3'/>
        </div>
      </div>
    </article>
  </section>
)

export default Impro;
