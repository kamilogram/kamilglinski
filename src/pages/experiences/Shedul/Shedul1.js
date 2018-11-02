import React from 'react';
import ShedulAppView from '../../../images/Shedul.PNG';
import FreshaAppView from '../../../images/Fresha.PNG';
      
const Shedul1 = () => (
  <section className='withLeftHeader'>
    <h1 className="smallerTitle">Surge Ventures</h1>
    <article className='descSections'>
      <div>
        <div>stanowisko</div>
        <b>front-end developer (React.js)</b>
      </div>

      <div>
        <div>czas trwania</div>
        <div>marzec 2018 - październik 2018</div>
      </div>

      <div>
        <div>profil firmy</div>
        <div>Rozwijanie dwóch aplikacji webowych o zasięgu ogólnoświatowym:</div>
        <div><b>Shedul</b> do zarządzania salonami Spa & Wellness </div>
        <div><b>Fresha</b> - aplikacja kliencka - do wyszukiwania salonów oraz samodzielnej rezerwacji ich usług online.</div>
      </div>
      <div>wygląd aplikacji</div>
      <div className='imagesWeb'>
        <div>
          <a
            href="https://www.shedul.com/"
            target='_blank'
            rel='noopener noreferrer'
            title='Kliknij Mnie'
            className='imgAsLink'>
              <div>Shedul.com</div>
              <img
                className='image100'
                alt='shedul.com'
                src={ShedulAppView}
                />
          </a>
        </div>
        <div>
          <a
            href="https://www.fresha.com/"
            target='_blank'
            rel='noopener noreferrer'
            title='Kliknij Mnie'
            className='imgAsLink'>
              <div>Fresha.com</div>
              <img
                className='image100'
                alt='fresha.com'
                src={FreshaAppView}
                />
          </a>
        </div>
      </div>
    </article>
  </section>
)

export default Shedul1;
