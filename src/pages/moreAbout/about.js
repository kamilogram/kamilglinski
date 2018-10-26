import React from 'react';

const about = () => (
  <section className='withLeftHeader'>
    <h1>Więcej o mnie</h1>
    <article className='verticalJustified withMargins'>
      <div>
        Mówi się, że dzień bez nauczenia się czegoś nowego to dzień stracony. W moim przypadku na słowach się nie kończy. Mimo kilkuletniego stażu w tworzeniu stron i aplikacji internetowych wciąż wiem, że istnieje niezliczona ilość frameworków, bibliotek i narzędzi do tworzenia front-endu, że nic tylko brać i je poznawać!
      </div>
      <div>
        Na obecnym etapie wgryzam się w sposoby zaawansowanego używania react'a i redux'a oraz bibliotek na nich opartych, np. <a href='https://github.com/ReactTraining/react-router' target='_blank' rel='noopener noreferrer'>react-router</a>. Jestem też w trakcie poszerzania wiedzy na temat <a href='https://facebook.github.io/react-native/' target='_blank' rel='noopener noreferrer'>React Native</a>, oraz w sposobów dodawania elementów back-endowych do aplikacji internetowych (np. <a href='http://graphql.org/' target='_blank' rel='noopener noreferrer'>GraphQL</a>, z którym miałem do czynienia w ostatnim miejscu pracy.
      </div>
      <div>
        W miarę możliwości uczęszczam również na meet-upy związane z tematyką programowania w React'cie. Ostatnio na przykład byłem <a href='https://www.meetup.com/React-Warsaw/events/246930974/?_locale=pl-PL' target='_blank' rel='noopener noreferrer'>na tym meet-up'ie</a>.
      </div>
      </article>
    </section>
)

export default about;
