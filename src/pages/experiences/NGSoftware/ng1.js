import React from 'react';
import Filttr from '../../../images/Filttr.PNG';

const ng1 = () => (
  <section className='withLeftHeader'>
    <h1>NG Software</h1>
    <article className='descSections'>
      <div>
        <div>stanowisko</div>
        <b>front-end developer (React Native)</b>
      </div>

      <div>
        <div>czas trwania</div>
        <div>czerwiec 2017 - wrzesień 2017</div>
      </div>

      <div>
        <div>moje zadania</div>
        <div>Współtworzenie aplikacji mobilnej FILTTR do łączenia pracodawców z kandydatami do pracy w branży IT.</div>
      </div>
      <div>
        <div>strona</div>
        <a
          href="https://filttr.pl"
          target='_blank' rel='noopener noreferrer'
        title='Kliknij Mnie'>
          <img className='image80'
            alt='Wygląd aplikacji Filttr'
            src={Filttr}
          />
        </a>
      </div>
    </article>
  </section>
)

export default ng1;
