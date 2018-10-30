import React from 'react';
import LeonAppView from '../../../images/LeonAppView.PNG';

const leon1 = () => (
  <section className='withLeftHeader'>
    <h1>Leon Software</h1>
    <article className='descSections'>
      <div>
        <div>stanowisko</div>
        <b>front-end developer (React.js)</b>
      </div>

      <div>
        <div>czas trwania</div>
        <div>grudzień 2014 - listopad 2016</div>
      </div>

      <div>
        <div>profil firmy</div>
        <div>Rozwijanie zaawansowanej aplikacji webowej do zarządzania flotą lotniczą dla prywatnych operatorów.</div>
      </div>
      <div>
        <div>wygląd aplikacji</div>
        <a
          href="https://www.youtube.com/watch?v=aW-wVByjLhk"
          target='_blank' rel='noopener noreferrer'
          title='Kliknij Mnie'>
            <img
              className='image80'
              alt='Wygląd aplikacji Leon'
              src={LeonAppView}
            />
        </a>
      </div>
    </article>
  </section>
)


export default leon1;
