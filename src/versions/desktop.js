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
  Shedul1,
  Shedul2,
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
  Youtube,
  Ending,
} from '../pages';

const desktop = () => (
  <Impress hint={true}
    hintMessage='Do przechodzenia dalej użyj strzałek lub spacji.'
    progress={true}
    fallbackMessage={<p>Niestety <b>twoja przeglądarka lub urządzenie mobilne</b> nie wspiera elementów tej strony poprawnie. Jeśli tak jest, wejdź tu.</p>}
  >
    {StepContainer('mainHeader', 800, 'theVeryFirst', 'title', [<NameHeader />])}
    {StepContainer("mainData", 800, "", "about", [<ArticleMainWithAside />])}
    {StepContainer("skillsMainAndCircles", 800, 'withDemonstrableHeader taller', "skills" , [<Skills />])}
    {StepContainer("skillsPerc", 700, 'transparent secondExperience', "skills2", [<WebDevelopingSkills />])}
    {StepContainer("skillsLibrary", 700, 'transparent thirdExperience', "skills3" , [<LibrarySkills />])}
    {StepContainer("mainExperiences", 700, 'showManySteps', "experiences" , [<ExperiencesTimeline />])}
    {StepContainer("nobo", 800, 'hiding withDemonstrableHeader', "no-bo" , [<Nobo1 />])}
    {StepContainer("nobo", 800, 'hiding subPage withDemonstrableHeader', "no-bo2" , [<Nobo2 />])}
    {StepContainer("leon", 800, 'hiding h640 withDemonstrableHeader', "leon" , [<Leon1 />])}
    {StepContainer("leon", 800, 'hiding subPage h640 withDemonstrableHeader', "leon2" , [<Leon2 />])}
    {StepContainer("togedo", 800, 'hiding withDemonstrableHeader', 'togedo' , [<Togedo1 />])}
    {StepContainer("shedul", 800, 'hiding withDemonstrableHeader', "surge", [<Shedul1 />])}
    {StepContainer("shedul", 800, 'hiding subPage', "surge2", [<Shedul2 />])}
    {StepContainer("education", 700, 'taller showManySteps', "education" , [<EducationTimeline />])}
    {StepContainer("uwb", 800, 'hiding withDemonstrableHeader', "uniwersytet-w-bialymstoku" , [<Uwb1 />])}
    {StepContainer("pb", 800, 'hiding h640 withDemonstrableHeader', "politechnika-bialostocka1" , [<Pb1 />])}
    {StepContainer("pb", 800, 'hiding subPage h640 withDemonstrableHeader', "politechnika-bialostocka2" , [<Pb2 />])}
    {StepContainer("about", 800, "", "more-about", [<About />],)}
    {StepContainer("kamilograpp", 800, 'hiding h640', "kamilograpp1", [<Kamilograpp1 />])}
    {StepContainer("mainHobbys", 800, 'showManySteps', "hobby", [<HobbysMain />])}
    {StepContainer("piano", 800, 'withDemonstrableHeader hiding', "piano-learning" , [<Piano />])}
    {StepContainer("impro", 800, 'withDemonstrableHeader hiding', "theatre-improvisation", [<Impro />])}
    {StepContainer("youtube", 800, 'withDemonstrableHeader hiding', "youtube-channel", [<Youtube />])}
    {StepContainer("ending", 800, "", "ending", [<Ending />,  <DesktopFooter />])}
  </Impress>
)

export const StepContainer = (data, duration, className='', id, componentArray) => (
  <Step
    data={s[data]}
    duration={duration}
    id={id}
    className={className}
  >
    {componentArray}
  </Step>
)

export default desktop;
