import React from 'react';
import LiSign from '../../../components/liSign.js';

const nobo1 = () => (
  <section className='withLeftHeader doubledHeader'>
    <h1>No-Bo</h1>
    <article className='descSections verticalAligned'>
      <div>
        <div>stanowisko</div>
        <b>web developer</b>
      </div>

      <div>
        <div>czas trwania</div>
        <div>styczeń 2014 - czerwiec 2014</div>
      </div>

      <div>
        <div>profil firmy</div>
        <div>Tworzenie responsywnych designerskich stron internetowych.</div>
      </div>
      <div>
        <div>moje zadania</div>
        <div>
          <ul>
            <li><LiSign/>współtworzenie projektów responsywnych stron internetowych na podstawie plików PSD w oparciu o autorski CMS firmy</li>
            <li><LiSign/>zarządzanie przepływem danych aplikacji za pomocą Smarty</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <span>link do strony: </span>
          <a href='http://www.no-bo.co/' target='_blank' rel='noopener noreferrer'>No-Bo</a>.
        </div>
      </div>
    </article>
  </section>
)

export default nobo1;
