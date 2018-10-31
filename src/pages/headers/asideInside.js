import React from 'react';
import personPic from '../../images/personPic.png';

const asideInside = () => (
  <div>
    <img
      className='asideImg'
      src={personPic}
      alt='Kamil Gliński'
    />
    <div className='dane'>
      <h6>Dane osobowe</h6>
      <div className='asideSection'>
        <div>e-mail</div>
        <a href="mailto:glinski.kamil1985@gmail.com">
          glinski.kamil1985@gmail.com
        </a>
      </div>
      <div className='asideSection'>
        <div>telefon</div>
        <div>505 443 406</div>
      </div>
      <div className='asideSection'>
        <div>wiek</div>
        <div>33</div>
      </div>
      <div className='asideSection'>
        <div>miasto</div>
        <div>Warszawa</div>
      </div>
    </div>
  </div>
)

export default asideInside
