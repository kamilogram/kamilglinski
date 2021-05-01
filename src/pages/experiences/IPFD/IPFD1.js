import React from 'react';
import Hapipozyczki from '../../../images/hapipozyczki.jpg';
import Creditea from '../../../images/creditea.jpg';
      
const IPFD1 = () => (
  <section className='withLeftHeader'>
    <h1>IPF Digital</h1>
    <article className='descSections'>
      <br/>
      <br/>
      <div>
        <div>stanowisko</div>
        <b>front-end developer (React.js)</b>
      </div>

      <div>
        <div>czas trwania</div>
        <div>grudzień 2018 - grudzień 2020</div>
      </div>

      <div>
        <div>profil firmy</div>
        <div>Utrzymywanie i rozwój międzynarodowych aplikacji internetowych do zarządzania kredytami pozabankowymi.</div>
      </div>
      <div className='imagesWeb'>
        <div>
          <a
            href="https://hapipozyczki.pl/"
            target='_blank'
            rel='noopener noreferrer'
            title='Kliknij Mnie'
            className='imgAsLink'>
              <div>Hapipożyczki</div>
              <img
                className='image100'
                alt='hapipozyczki.pl'
                src={Hapipozyczki}
              />
          </a>
        </div>
        <div>
          <a
            href="https://creditea.lv/"
            target='_blank'
            rel='noopener noreferrer'
            title='Kliknij Mnie'
            className='imgAsLink'>
              <div>creditea.lv</div>
              <img
                className='image100'
                alt='creditea.lv'
                src={Creditea}
              />
          </a>
        </div>
      </div>
    </article>
  </section>
)

export default IPFD1;
