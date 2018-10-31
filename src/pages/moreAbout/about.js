import React from 'react';

const about = () => (
  <section className='withLeftHeader'>
    <h1>Więcej o mnie</h1>
    <article className='verticalJustified withMargins'>
      <div>
        Mówi się, że dzień bez nauczenia się czegoś nowego to dzień stracony. W moim przypadku na słowach się nie kończy. Wiadomo, że istnieje niezliczona ilość frameworków, bibliotek i narzędzi przydatnych do tworzenia front-endu. Więc mimo już kilkuletniego stażu na tym stanowisku tak naprawdę uczę się cały czas.
      </div>
      <div>
        Na obecnym etapie wgryzam się w sposoby zaawansowanego używania react'a i redux'a oraz bibliotek na nich opartych, np. <a href='https://github.com/ReactTraining/react-router' target='_blank' rel='noopener noreferrer'>react-router</a>. Jestem też w trakcie poszerzania wiedzy na temat sposobów dodawania elementów back-endowych do aplikacji internetowych (np. <a href='http://graphql.org/' target='_blank' rel='noopener noreferrer'>GraphQL</a>).
      </div>
      <div>
        W miarę możliwości staram się też uczęszczać również na meet-upy związane z tematyką programowania w Java Scripcie i React'cie.
      </div>
    </article>
  </section>
)

export default about;
