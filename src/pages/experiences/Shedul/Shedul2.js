import React from 'react';
import LiWithSign from '../../../components/liWithSign.js';

const Shedul2 = () => (
  <section className='withLeftHeader'>
    <h1>Shedul</h1>
    <article className='descSections subPageContentContainer'>
      <br />
      <div>
        <div>Stack front-end'u</div>
        <div>React w wersji od v16.0.0 do v16.4.0, 
          redux,
          redux-ORM,
          postcss,
          yarn,
          Git,
          GitHub,
          prettier,
          storybook,
          metodologia Scrum.
        </div>
      </div>
      <div>
        <div>moje zadania</div>
        <div>
          <ul>
            1. Team integracyjny:
            <LiWithSign>naprawa zgłoszonych bugów na różnych urządzeniach</LiWithSign>
            <LiWithSign>wpółpraca z testerami przy zgłaszaniu wychwyconych bugów</LiWithSign>
            <br />
            2. Team scrum'owy:
            <LiWithSign>współtworzenie nowych feature'ów zaprojektowanych przez team produktowy</LiWithSign>
            <LiWithSign>rozszerzanie funkcjonalności istniejących widoków i komponentów</LiWithSign>
            <LiWithSign>współpraca z innymi teamami scrumowymi</LiWithSign>
            <LiWithSign>uczestnictwo we frontendowej międzyteamowej gildii</LiWithSign>
          </ul>
        </div>
        <div>
          <div className='pageLink'>
            <span>link do strony firmy na </span>
            <a
            href='https://github.com/surgeventures/'
            target='_blank'
            rel='noopener noreferrer'>
               GitHub'ie
            </a>.
          </div>
        </div>
      </div>
    </article>
  </section>
)

export default Shedul2;
