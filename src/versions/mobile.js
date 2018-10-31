import React from 'react';

import {
  NameHeader,
  ArticleMain,
  AsideInside,
  MobileFooter,
  Skills,
  WebDevelopingSkills,
  LibrarySkills,
  Shedul1,
  Shedul2,
  Togedo1,
  Leon1,
  Leon2,
  Nobo1,
  Nobo2,
  Pb1,
  Pb2,
  Uwb1,
  About,
  Kamilograpp1,
  HobbysMain,
  Piano,
  Impro,
  Youtube
} from '../pages/index.js';

const Mobile = () => (
  <div className='devicePresentation'>
    <div id='background'/>
    <div className='step deviceStep'><NameHeader /></div>
    <div className='step deviceStep'><ArticleMain /></div>
    <div className='step deviceStep asideDevice'><AsideInside /></div>
    <div className='step deviceStep withBigHeader'><Skills /></div>
    <div className='step deviceStep'><WebDevelopingSkills /></div>
    <div className='step deviceStep'><LibrarySkills /></div>
    <div className='step deviceStep onlyHeader'>
      <section className='withLeftHeader doubledHeader'>
        <h1>Doświadczenie zawodowe</h1>
      </section>
    </div>
    <div className='step deviceStep withSubHeader'><Shedul1 /></div>
    <div className='step deviceStep withSubHeader'><Shedul2 /></div>
    <div className='step deviceStep withSubHeader'><Togedo1 /></div>
    <div className='step deviceStep withSubHeader'><Leon1 /></div>
    <div className='step deviceStep withoutH1'><Leon2 /></div>
    <div className='step deviceStep withSubHeader'><Nobo1 /></div>
    <div className='step deviceStep withoutH1'><Nobo2 /></div>
    <div className='step deviceStep onlyHeader'>
      <section className='withLeftHeader'>
        <h1>Wykształcenie</h1>
      </section>
    </div>
    <div className='step deviceStep withSubHeader'><Pb1 /></div>
    <div className='step deviceStep withoutH1'><Pb2 /></div>
    <div className='step deviceStep withSubHeader'><Uwb1 /></div>
    <div className='step deviceStep'><About /></div>
    <div className='step deviceStep'><Kamilograpp1 /></div>
    <div className='step deviceStep'><HobbysMain /></div>
    <div className='step deviceStep withSubHeader'><Piano /></div>
    <div className='step deviceStep withSubHeader'><Impro /></div>
    <div className='step deviceStep withSubHeader'><Youtube /></div>
    <footer className='step deviceStep'><MobileFooter /></footer>
  </div>
)


export default Mobile;
