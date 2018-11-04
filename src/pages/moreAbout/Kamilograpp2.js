import React from 'react';
import kamilograppLogo from '../../images/kamilograppLogoNew.png';

const Kamilograpp2 = () => (
  <section className='withLeftHeader doubledHeader'>
    <h1>Mój autorski projekt</h1>
    <article className='verticalJustified'>
      <div className='subPageContentContainer'>
        <div>
          Jeśli chcę się tą aplikacją "pochwalić" przed światem i ułatwić dzięki niej naukę nut każdemu chętnemu, wiem, że muszę ją zrobić po prostu dobrze (czytaj: "idealnie"). Wychodzi przy niej mój perfekcjonizm połączony z pracoholizmem, bo wystarczy, że zaimplementuję jedną rzecz a od razu rodzą mi się pomysły na pięć kolejnych "ficzerów". I tak w bez końca.
        </div>
        <div>
          <a
            href="http://kamilograpp.pl/"
            target={'_blank'}
            title={'Kliknij Mnie'}
            className='kamilograppLogoLink transparentImageLink'
          >
            <img
              alt='Projekt KamilogrAPP'
              className='image100'
              src={kamilograppLogo}
            />
          </a>
        </div>
        <div className='withSpace'>Aplikację tworzę (jakżeby inaczej) w react'cie wespół z redux'em.</div>
      </div>
    </article>
  </section>
)

export default Kamilograpp2;
