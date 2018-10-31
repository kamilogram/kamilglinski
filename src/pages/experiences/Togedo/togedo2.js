import React from 'react';
import LiWithSign from '../../../components/liWithSign.js';

const togedo2 = () => (
  <section className='withLeftHeader'>
    <h1>Leon Software</h1>
    <article className='descSections'>
      <div>
        <div>wykorzystywane technologie / frameworki podczas tworzenia front-end'u:</div>
        <div>React w wersji od v0.11.0 do v15.3.0,
          <a href='https://github.com/facebook/flux' target='_blank' rel='noopener noreferrer'> "facebook/flux"</a>, sass, git, mori, lodash, gulp, <a href='https://www.fogcreek.com/fogbugz/' target='_blank' rel='noopener noreferrer'>FogBugz</a><span>, </span><a href='http://www.fogcreek.com/fogbugz/devhub'  target='_blank' rel='noopener noreferrer'>Kiln</a>.</div>
      </div>
      <div>
        <div>moje zadania</div>
        <div>
          <ul>
            <LiWithSign>tworzenie nowych komponentów i modyfikowanie istniejących</LiWithSign>
            <LiWithSign>przenoszenie fragmentów widoku aplikacji z <a href='http://www.gwtproject.org/' target='_blank' rel='noopener noreferrer'>technologii GWT</a> (Google Web Toolkit) do React'a</LiWithSign>
            <LiWithSign>debuggowanie istniejącego kodu i zgłaszanie nowych błędów działania aplikacji</LiWithSign>
            <LiWithSign>weryfikacja nowego kodu tworzonego przez innych programistów teamu (code review)</LiWithSign>
            <LiWithSign>zgłaszanie pomysłów na rozwój aplikacji</LiWithSign>
            <LiWithSign>odpowiedzialność za wygląd i poprawne działanie głównego menu aplikacji</LiWithSign>
          </ul>
        </div>
        <div>
          <div><span>link do strony: </span><a href='http://www.leonsoftware.com/' target='_blank' rel='noopener noreferrer'>Leon Software</a>.</div>
        </div>
      </div>
    </article>
  </section>
)

export default togedo2;
