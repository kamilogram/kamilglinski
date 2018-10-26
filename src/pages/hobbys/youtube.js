import React from 'react';
import youTube from '../../images/youTube.png';

const youtube = () => (
  <section className='withLeftHeader doubledHeader'>
    <h1>Kanałem na YouTube</h1>
    <article>
      <div>
        Jako <a href='https://www.youtube.com/user/Kamilogram' target='_blank' rel='noopener noreferrer'>Kamilogram</a> tworzę klipy z karaoke do popularnych piosenek i udostępniam je na YouTube. Ale żeby się wyróżnić z wielu kanałów tworzących podobny materiał - aranżacje jakie tworzę do klipów brzmią jakby były grane na pianinie!
      </div>
      <div>
        <a
          href="https://www.youtube.com/user/Kamilogram"
          target='_blank' rel='noopener noreferrer'
          title='Piano karaoke do piosenki Sylwii Grzeszczak "Tamta dziewczyna". Zobacz kanał.'
          className='image100'
        >
          <img
            className='image80 smaller'
            alt='Kanał Kamilogram'
            src={youTube} />
        </a>
      </div>
      <div>
        Kanał idzie mi całkiem nieźle, mam już ponad 900 tysięcy wyświetleń i ponad 1500 subskrybentów, z czego nie ukrywam, że jestem bardzo dumny.
      </div>
    </article>
  </section>
)

export default youtube;
