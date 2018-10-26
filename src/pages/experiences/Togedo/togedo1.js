import React from 'react';
import Togedo from '../../../images/togedo.svg';

const togedo1 = () => (
  <section className='withLeftHeader'>
    <h1>Togedo</h1>
    <article className='descSections'>
      <div>
        <div>stanowisko</div>
        <b>front-end developer (React.js)</b>
      </div>

      <div>
        <div>czas trwania</div>
        <div>październik 2017 - luty 2018</div>
      </div>

      <div>
        <div>profil firmy</div>
        <div>Stworzenie aplikacji desktopowej do tworzenia bibliotek modułów javascriptowych do wielokrotnego użytku w dowolnych projektach.</div>
      </div>
      <div>
        <div>strona</div>
        <a
          href="https://www.togedo.com/"
          target='_blank' rel='noopener noreferrer'
        title='Kliknij Mnie'>
          <img className='image80'
            alt='Leon app view'
            src={Togedo}
          />
        </a>
      </div>
    </article>
  </section>
)


export default togedo1;
