import React from 'react';
import LiSign from '../../../components/liSign.js';

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
            <li><LiSign/>tworzenie nowych komponentów i modyfikowanie istniejących</li>
            <li><LiSign/>przenoszenie fragmentów widoku aplikacji z <a href='http://www.gwtproject.org/' target='_blank' rel='noopener noreferrer'>technologii GWT</a> (Google Web Toolkit) do React'a</li>
            <li><LiSign/>debuggowanie istniejącego kodu i zgłaszanie nowych błędów działania aplikacji</li>
            <li><LiSign/>weryfikacja nowego kodu tworzonego przez innych programistów teamu (code review)</li>
            <li><LiSign/>zgłaszanie pomysłów na rozwój aplikacji</li>
            <li><LiSign/>odpowiedzialność za wygląd i poprawne działanie głównego menu aplikacji</li>
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
