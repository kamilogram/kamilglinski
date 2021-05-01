import React from 'react';
import LiWithSign from '../../../components/liWithSign.js';

const IPFD2 = () => (
  <section className='withLeftHeader'>
    <h1>IPF Digital</h1>
    <article className='descSections subPageContentContainer'>
      <div>
        <div>Stack front-end'u</div>
        <div>React w wersji do 16.12 (w tym <b>hooki</b>), 
          redux,
          styled-components,
          jest,
          npm,
          git,
          lerna,
          ejs,
          storybook,
          metodologia Scrum oraz Kanban.
        </div>
      </div>
      <div>
        <div>moje zadania</div>
        <div>
          <ul>
            <LiWithSign>utrzymywanie i rozwój stron internetowych "landing pages"</LiWithSign>
            <LiWithSign>upgrade'owanie wraz z zespołem projektu do styled-components (podejście "LEGO")</LiWithSign>
            <LiWithSign>integrowanie projektu z rozwijanym przez backend wewnętrznym CMS-em</LiWithSign>
            <LiWithSign>naprawa bugów na różnych urządzeniach</LiWithSign>
            <LiWithSign>eliminowanie długu technologicznego</LiWithSign>
            <LiWithSign>wdrażanie nowych funkcjonalności w aplikacji do rejestrowania nowych użytkowników</LiWithSign>
          </ul>
        </div>
        <div>
          <div className='pageLink'>
            <span>Outsourcing przez firmę </span>
            <a
            href='https://britenet.com.pl/'
            target='_blank'
            rel='noopener noreferrer'>
               Britenet
            </a>.
          </div>
        </div>
      </div>
    </article>
  </section>
)

export default IPFD2;
