import React from 'react';
import { Impress, Step } from 'react-impressjs';
import s from '../stepsData';
import ExperiencesTimeline from '../components/experiencesTimeline';
import EducationTimeline from '../components/educationTimeline';

import {
  NameHeader,
  ArticleMainWithAside,
  DesktopFooter,
  Skills,
  WebDevelopingSkills,
  LibrarySkills,
  Togedo1,
  Togedo2,
  Ng1,
  Leon1,
  Leon2,
  Nobo1,
  Nobo2,
  Pb1,
  Pb2,
  Uwb1,
  About,
  Kamilograpp1,
  Kamilograpp2,
  HobbysMain,
  Piano,
  Impro,
  Youtube,
  PbGames,
} from '../pages/pages.js';

const desktop = () => (
  <Impress hint={true}
    hintMessage='Do przechodzenia dalej użyj strzałek lub spacji.'
    progress={true}
    fallbackMessage={<p>Niestety <b>twoja przeglądarka lub urządzenie mobilne</b> nie wspiera elementów tej strony poprawnie. Jeśli tak jest, wejdź tu.</p>}
  >

    <Step
      data={s.mainHeader}
      duration={800}
      className='theVeryFirst'
      id="title"
    >
      <NameHeader />
    </Step>

    <Step
      data={s.mainData}
      duration={800}
      id="about"
    >
      <ArticleMainWithAside />
    </Step>

    <Step
      data={s.skillsMainAndCircles}
      duration={800}
      className='withDemonstrableHeader taller'
      id="skills"
    >
      <Skills />
    </Step>

    <Step
      data={s.skillsPerc}
      duration={700}
      className='transparent secondExperience'
      id="skills2"
    >
      <WebDevelopingSkills />
    </Step>

    <Step
      data={s.skillsLibrary}
      duration={700}
      className='transparent thirdExperience'
      id="skills3"
    >
      <LibrarySkills />
    </Step>

    <Step
      data={s.mainExperiences}
      duration={700}
      className='showManySteps'
      id="experiences"
    >
      <ExperiencesTimeline />
    </Step>

    <Step
      data={s.nobo}
      duration={800}
      className='hiding withDemonstrableHeader'
      id="no-bo"
    >
      <Nobo1 />
    </Step>

    <Step
      data={s.nobo}
      duration={800}
      className='hiding subPage withDemonstrableHeader'
      id="no-bo2"
    >
      <Nobo2 />
    </Step>

    <Step
      data={s.leon}
      duration={800}
      className='hiding h640 withDemonstrableHeader'
      id="leon"
    >
      <Leon1 />
    </Step>

    <Step
      data={s.leon}
      duration={800}
      className='hiding subPage h640 withDemonstrableHeader'
      id="leon2"
    >
      <Leon2 />
    </Step>

    <Step
      data={s.ngs}
      duration={800}
      className='hiding withDemonstrableHeader'
      id="ng-software"
    >
      <Ng1 />
    </Step>

    <Step
      data={s.togedo}
      duration={800}
      className='hiding withDemonstrableHeader'
      id='togedo'
    >
      <Togedo1 />
    </Step>

    <Step
      data={s.education}
      duration={700}
      className='taller showManySteps'
      id="education"
    >
      <EducationTimeline />
    </Step>

    <Step
      data={s.uwb}
      duration={800}
      className='hiding withDemonstrableHeader'
      id="uniwersytet-w-bialymstoku"
    >
      <Uwb1 />
    </Step>

    <Step
      data={s.pb}
      duration={800}
      className='hiding h640 withDemonstrableHeader'
      id="politechnika-bialostocka1"
    >
      <Pb1 />
    </Step>

    <Step
      data={s.pb}
      duration={800}
      className='hiding subPage h640 withDemonstrableHeader'
      id="politechnika-bialostocka2"
    >
      <Pb2 />
    </Step>

    <Step
      duration={800}
      data={s.about}
      id="more-about"
    >
      <About />
    </Step>

    <Step
      duration={800}
      data={s.kamilograpp}
      className='hiding h640'
      id="kamilograpp1"
    >
      <Kamilograpp1 />
    </Step>

    <Step
      duration={700}
      data={s.kamilograpp}
      className='hiding subPage h640'
      id="kamilograpp2"
    >
      <Kamilograpp2 />
    </Step>

    <Step
      duration={800}
      data={s.mainHobbys}
      className='showManySteps'
      id="hobby"
    >
      <HobbysMain />
    </Step>

    <Step
      duration={800}
      data={s.piano}
      className='withDemonstrableHeader hiding'
      id="piano-learning"
    >
      <Piano />
    </Step>

    <Step
      duration={800}
      data={s.impro}
      className='withDemonstrableHeader hiding'
      id="theatre-improvisation"
    >
      <Impro />
    </Step>

    <Step
      duration={800}
      data={s.youtube}
      className='withDemonstrableHeader hiding'
      id="youtube-channel"
    >
      <Youtube />
    </Step>

    <Step
      data={s.ending}
      duration={800}
      id="ending"
    >
      <PbGames />
      <DesktopFooter />
    </Step>
  </Impress>
)

export default desktop;
