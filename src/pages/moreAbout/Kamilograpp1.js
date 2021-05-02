import React, { useState } from 'react';
import kamilograpp from '../../images/kamilograpp.PNG';

const Kamilograpp1 = () => {
  const [label, useLabel] = useState(false);
  const [desktop, useDesktop] = useState(window.matchMedia("screen and (min-width: 901px)").matches);
  return (
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
          {desktop ? (
            <a
              href="https://kamilogram.github.io/kamilograpp/"
              target='_blank'
              rel='noopener noreferrer'
              title='Otwórz https://kamilogram.github.io/kamilograpp/'
            >
              <img
                className='image80'
                src={kamilograpp}
                alt='Strona aplikacji KamilogrAPP'
              />
            </a>
          ) : (
            <div className="withLabel">
              <img
                src={kamilograpp}
                alt='Strona aplikacji KamilogrAPP'
                className='image80'
                onClick={() => useLabel(!label)}
              />
              {label &&
                <div
                  className="imageLabel"
                  onClick={() => useLabel(false)}
                >
                  Uwaga - aplikacja nie jest jeszcze przystosowana na urządzenia mobilne.
                </div>
              }
            </div>
          )}
        </div>
      </article>
    </section>
  )
}

export default Kamilograpp1;
