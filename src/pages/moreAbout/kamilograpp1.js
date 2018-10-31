import React from 'react';
import kamilograpp from '../../images/kamilograpp.PNG';

const kamilograpp1 = () => (
  <section className='withLeftHeader'>
    <h1>Mój autorski projekt</h1>
    <article>
      <div>
        "Powiedz mi, a zapomnę, pokaż mi, a zapamiętam, pozwól mi zrobić, a zrozumiem…"
      </div>
      <div>
        Wychodząc z tego słusznego twierdzenia Konfucjusza - od razu staram się wykorzystać w praktyce materiał jaki aktualnie przyswajam. Dlatego w wolnym czasie tworzę autorską aplikację do nauki nut na pianino. Z jednej strony chciałbym ją w przyszłości rozwinąć do poziomu komercyjnego, a z drugiej - służy mi właśnie jako poligon do praktycznego rozwoju swoich umiejętności.
      </div>
      <div>
        <a
          href="https://kamilogram.github.io/kamilograpp/"
          target='_blank'
          rel='noopener noreferrer'
          title='Otwórz https://kamilogram.github.io/kamilograpp/'>
            <img
              className='image100'
              src={kamilograpp}
              alt='Strona aplikacji KamilogrAPP'
            />
        </a>
      </div>
    </article>
  </section>
)

export default kamilograpp1;
