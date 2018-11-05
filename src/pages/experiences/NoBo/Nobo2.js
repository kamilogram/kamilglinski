import React from 'react';
import Ewa from '../../../images/Ewa.PNG';
import abaPlus from '../../../images/abaPlus.PNG';
import q from '../../../images/q.PNG';

const Nobo2 = () => (
  <section className='withLeftHeader'>
    <h1>No-Bo</h1>
    <article className='descSections'>
      <div className='subPageContentContainer'>
        <header>Strony współtowrzone w No-Bo:</header>
        <div className='imagesWeb'>
          <div>
            <div>Ewa Chodakowska</div>
            <a
              href="http://www.ewachodakowska.pl/"
              target='_blank'
              rel='noopener noreferrer'
              title='Zobacz stronę'
              className='imgAsLink'>
              <img
                className='image100'
                alt='Strona Ewy Chodakowskiej'
                src={Ewa} />
            </a>
          </div>
          <div>
            <div>Aba Plus</div>
            <a
              href="http://www.abaplus.pl/"
              target='_blank' rel='noopener noreferrer'
              title='Zobacz stronę'
              className='imgAsLink'>
              <img
                className='image100'
                alt='Strona Aba Plus'
                src={abaPlus} />
            </a>
          </div>
          <div>
            <div>Sklep Vogue</div>
            <a
              href="http://www.kiu.co/"
              target='_blank'
              rel='noopener noreferrer'
              title='Zobacz stronę'
              className='imgAsLink'>
                <img
                  className='image100'
                  alt='sklep Q'
                  src={q} />
            </a>
          </div>
        </div>
      </div>
    </article>
  </section>
)

export default Nobo2;
