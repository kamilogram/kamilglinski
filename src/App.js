import React, { Component } from 'react';
import './App.css';
import { Impress, Step } from 'react-impressjs';
import 'react-impressjs/styles/react-impressjs.css';
import stepView from './stepsProperties';
import personPic from './images/personPic.png';
import react from './images/react.png';
import redux from './images/redux.png';
import js from './images/js.png';
import html5css3 from './images/html5css3.png';
import jsEs6 from './images/JS_ES6.png';
import LeonAppView from './images/LeonAppView.PNG';
import liSign from './images/liSign.png';
import Ewa from './images/Ewa.PNG';
import abaPlus from './images/abaPlus.PNG';
import q from './images/q.PNG';
import kamilograpp from './images/kamilograpp.PNG';
import kamilograppLogo from './images/kamilograppLogoNew.png';
import stareMiasto from './images/stareMiasto.jpg';
import impro1 from './images/impro1.jpg';
import impro2 from './images/impro2.jpg';
import impro3 from './images/impro3.jpg';
import youtube from './images/youtube.png';
import ahmedman from './images/ahmedman.PNG';
import galaxian from './images/galaxian.PNG';
import testWebGL from './images/testWebGL.png';
import './css/circle.css';
import classNames from 'classnames';


class App extends Component {
  render() {
    const mobileViewport = window.matchMedia("screen and (max-width: 900px)");
    let app;

    const asideInside = <div>
      <img
        className='asideImg'
        src={personPic}
        alt='Kamil Gliński' />
      <div className='dane'>
        <h6>Dane osobowe</h6>
        <div className='asideSection'>
          <div>e-mail</div>
          <a href="mailto:glinski.kamil1985@gmail.com">glinski.kamil1985@gmail.com</a>
        </div>
        <div className='asideSection'>
          <div>telefon</div>
          <div>505 443 406</div>
        </div>
        <div className='asideSection'>
          <div>wiek</div>
          <div>31</div>
        </div>
        <div className='asideSection'>
          <div>miasto</div>
          <div>Warszajkljklwa</div>
        </div>
      </div>
    </div>;

    const articleMain = <article className='withTextImages verticalJustified closeEnough'>
      <h6>Technologie / frameworki</h6>
      <div>
        <span>React v. 15.5.0</span>
        <div className='imgContainer'>
          <img
            className='textLogo react'
            src={react}
            alt='react logo' />
        </div>
      </div>
      <div>
        <span>Redux</span>
        <div className='imgContainer'>

          <img
            className='textLogo'
            src={redux}
            alt='redux logo' />
        </div>
      </div>
      <div>
        <span>JS ECMAScript6</span>
        <div className='imgContainer'>
          <img
            className='textLogo'
            src={js}
            alt='js logo' />
          <img
            className='textLogo'
            src={jsEs6}
            alt='es6 logo' />
        </div>
      </div>
      <div>
        <span>HTML5 + CSS3</span>
        <div className='imgContainer'>

          <img
            className='textLogo'
            src={html5css3}
            alt='html5 + css3 logo' />
        </div>
      </div>
    </article>

    const mainFooter = <footer>
      Niniejsza strona powstała w technologii React na bazie <a href='https://github.com/facebookincubator/create-react-app' target='_blank' rel='noopener noreferrer'>create-react-app</a> oraz z użyciem <a href='https://www.npmjs.com/package/react-impressjs' target='_blank' rel='noopener noreferrer'>react-impress</a>. Jako tło wykorzystano zdjęcie z serwisu <a href='https://pixabay.com/' target='_blank' rel='noopener noreferrer'>Pixabay</a>. &copy; 2017 Kamil Gliński. Wszelkie prawa zastrzeżone.
    </footer>

    const deviceFooter = <div>
      Niniejsza strona powstała w technologii React na bazie <a href='https://github.com/facebookincubator/create-react-app' target='_blank' rel='noopener noreferrer'>create-react-app</a>. Jako tło wykorzystano zdjęcie z serwisu <a href='https://pixabay.com/' target='_blank' rel='noopener noreferrer'>Pixabay</a>. &copy; 2017 Kamil Gliński. Wszelkie prawa zastrzeżone.
    </div>

    const inside = [
      // inside0
      <header><div>Kamil Gliński</div><div>front-end developer</div></header>,

      //inside1
      <section className='withAside'>
        {articleMain}
        <aside>
          {asideInside}
        </aside>
      </section>,

      //inside2
      <section>
        <h1>Umiejętności</h1>
        <article className='halfArticle withInlineMarkers'>
          <header>front-end:</header>
          <div>
            <span>HTML5 + CSS3</span>
            <Dotter value={8}/>
          </div>
          <div>
            <span>Java Script</span>
            <Dotter value={8}/>
          </div>
          <div>
            <span>ES6 (ECMAScript 2015)</span>
            <Dotter value={8}/>
          </div>
          <div>
            <span>React</span>
            <Dotter value={7}/>
          </div>
          <div>
            <span>Redux</span>
            <Dotter value={6}/>
          </div>
        </article>
      </section>,


      // inside3
      <section>
        <article className='withPercCircles'>
          <header>web developing:</header>
          <div>
            <div>git</div>
            <div>
              <PercCircle value={60} color='green' />
            </div>
          </div>
          <div>
            <div>npm</div>
            <div>
              <PercCircle value={60} color='green' />
            </div>
          </div>
          <div>
            <div>webpack</div>
            <div>
              <PercCircle value={50} color='green' />
            </div>
          </div>
          <div>
            <div>gulp</div>
            <div>
              <PercCircle value={50} color='green' />
            </div>
          </div>
        </article>
      </section>,

      //inside4
      <section>
        <article>
          <header>biblioteki js:</header>
          <div>
            <span>lodash</span>
            <LineSlide value={70} />
          </div>
          <div>
            <span>mori</span>
            <LineSlide value={80} />
          </div>
          <div>
            <span>react-router</span>
            <LineSlide value={50} />
          </div>
          <div>
            <span>jQuery</span>
            <LineSlide value={50} />
          </div>
        </article>
      </section>,

      //inside5
      <section className='withLeftHeader'>
        <h1 className = 'bold'>Leon Software</h1>
        <article className='descSections'>
          <div>
            <div>stanowisko</div>
            <b>front-end developer (React.js)</b>
          </div>

          <div>
            <div>czas trwania</div>
            <div>grudzień 2014 - listopad 2016</div>
          </div>

          <div>
            <div>profil firmy</div>
            <div>Stworzenie i rozwijanie zaawansowanej aplikacji webowej dedykowanej do zarządzania flotą lotniczą dla prywatnych operatorów.</div>
          </div>
          <div>
            <div>wygląd aplikacji</div>
            <a
              href="https://www.youtube.com/watch?v=aW-wVByjLhk"
              target='_blank' rel='noopener noreferrer'
              title='Kliknij Mnie'>
              <img className='image80'
                alt='Leon app view'
                src={LeonAppView}
              />
            </a>
          </div>
        </article>
      </section>,

      //inside 6
      <section className='withLeftHeader'>
        <h1>Leon Software</h1>
        <article className='descSections'>
          <div>
            <div>wykorzystywane technologie / frameworki podczas tworzenia front-end'u:</div>
            <div>React w wersji od v0.11.0 do v15.3.0,
              <a href='https://github.com/facebook/flux' target='_blank' rel='noopener noreferrer'> "facebook/flux"</a>, sass, git, mori, lodash, gulp, <a href='https://www.fogcreek.com/fogbugz/' target='_blank' rel='noopener noreferrer'>FogBugz</a><span>, </span><a href='http://www.fogcreek.com/fogbugz/devhub'  target='_blank' rel='noopener noreferrer'>Kiln</a>.</div>
          </div>
          <div>
            <div>moje zadania</div>
            <div>
              <ul>
                <li><LiSign/>tworzenie nowych komponentów i modyfikowanie istniejących</li>
                <li><LiSign/>przenoszenie fragmentów widoku aplikacji z <a href='http://www.gwtproject.org/' target='_blank' rel='noopener noreferrer'>technologii GWT</a> (Google Web Toolkit) do React'a</li>
                <li><LiSign/>debuggowanie istniejącego kodu i zgłaszanie nowych błędów działania aplikacji</li>
                <li><LiSign/>weryfikacja nowego kodu tworzonego przez innych programistów teamu (code review)</li>
                <li><LiSign/>zgłaszanie pomysłów na rozwój aplikacji</li>
                <li><LiSign/>odpowiedzialność za wygląd i poprawne działanie głównego menu aplikacji</li>
              </ul>
            </div>
            <div>
              <div><span>link do strony: </span><a href='http://www.leonsoftware.com/' target='_blank' rel='noopener noreferrer'>Leon Software</a>.</div>
            </div>
          </div>
        </article>
      </section>,

      //inside7
      <section className='withLeftHeader doubledHeader'>
        <h1><div className='bold'>No-Bo</div><div>Agencja kreatywna</div></h1>
        <article className='descSections verticalAligned'>
          <div>
            <div>stanowisko</div>
            <b>web developer</b>
          </div>

          <div>
            <div>czas trwania</div>
            <div>styczeń 2014 - czerwiec 2014</div>
          </div>

          <div>
            <div>profil firmy</div>
            <div>Tworzenie responsywnych designerskich stron internetowych.</div>
          </div>
          <div>
            <div>moje zadania</div>
            <div>
              <ul>
                <li><LiSign/>współtworzenie projektów responsywnych stron internetowych na podstawie plików PSD w oparciu o autorski CMS firmy</li>
                <li><LiSign/>zarządzanie przepływem danych aplikacji za pomocą Smarty</li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <span>link do strony: </span>
              <a href='http://www.no-bo.co/' target='_blank' rel='noopener noreferrer'>No-Bo</a>.
            </div>
          </div>
        </article>
      </section>,

      //inside8
      <section className='withLeftHeader'>
        <h1>No-Bo</h1>
        <article className='descSections'>
          <header>Strony współtowrzone w No-Bo:</header>
          <div className='imagesWeb'>
            <div>
              <div>Strona Ewy Chodakowskiej</div>
              <a
                href="http://www.ewachodakowska.pl/"
                target='_blank' rel='noopener noreferrer'
                title='Zobacz stronę'
                className='imgAsLink'>
                <img
                  className='image100'
                  alt='Ewa Chodakowska strona'
                  src={Ewa} />
              </a>
            </div>
            <div>
              <div>Strona firmy Aba Plus</div>
              <a
                href="http://www.abaplus.pl/"
                target='_blank' rel='noopener noreferrer'
                title='Zobacz stronę'
                className='imgAsLink'>
                <img
                  className='image100'
                  alt='Strona Aba Plus'
                  src={abaPlus} />
              </a>
            </div>
            <div>
              <div>Sklep Vogue</div>
              <a
                href="http://www.kiu.co/"
                target='_blank' rel='noopener noreferrer'
                title='Zobacz stronę'
                className='imgAsLink'>
                <img
                  className='image100'
                  alt='sklep Q'
                  src={q} />
              </a>
            </div>
          </div>
        </article>
      </section>,

      //inside9
      <section className='withLeftHeader doubledHeader'>
        <h1 className='bold'>Politechnika Białostocka</h1>
        <article className='descSections verticalAligned'>
          <div>
            <div>na kierunku</div>
            <b>Informatyka II stopnia</b>
          </div>
          <div>
            <div>Specjalność</div>
            <div>Grafika i multimedia</div>
          </div>
          <div>
            <div>uzyskany tytuł</div>
            <div>Magister inżynier</div>
          </div>
          <div>
            <div>tytuł pracy magisterskiej</div>
            <div>"Porównanie współczesnych standardów prezentacji grafiki 3D w przeglądarkach internetowych."</div>
          </div>
          <div>
            <div>czas trwania</div>
            <div>październik 2011 - czerwiec 2013</div>
          </div>
        </article>
      </section>,


      //inside10
      <section className='withLeftHeader doubledHeader'>
        <h1>Politechnika Białostocka</h1>
        <article className='verticalJustified'>
          <div>Jeden z testów stworzony w trakcie pracy magisterskiej na potrzeby badania zdolności wyświetlania grafiki 3D w przeglądarkach. Test polegał na badaniu efektywności wyświetlania wielu obiektów 3D w zależnosci od ich poruszania, ilości i rodzajów nałożonych tekstur, poruszania kamerą itp.</div>
          <a
            href="http://kamilglinski.pl/testWebGL/"
            target='_blank' rel='noopener noreferrer'
            title='Uruchom test'
            className='image100'>
            <img
              alt='strona testu WebGL'
              className='image100'
              src={testWebGL} />
          </a>
        </article>
      </section>,


      //inside11
      <section className='withLeftHeader doubledHeader'>
        <h1 className='bold'>Uniwersytet w Białymstoku</h1>
        <article className='descSections verticalAligned'>
          <div>
            <div>kierunek</div>
            <b>Fizyka</b>
          </div>
          <div>
            <div>uzyskany tytuł:</div>
            <div>Licencjat</div>
          </div>
          <div>
            <div>tytuł pracy licencjackiej:</div>
            <div>"Orbitale atomowe – obrazowanie w języku JAVA."</div>
          </div>
          <div>
            <div>czas trwania:</div>
            <div>październik 2008 - lipiec 2011</div>
          </div>
        </article>
      </section>,


      //inside12
      <section className='withLeftHeader'>
        <h1>Więcej o mnie</h1>
        <article className='verticalJustified withMargins'>
          <div>
            Mówi się, że dzień bez nauczenia się czegoś nowego to dzień stracony. W moim przypadku na słowach się nie kończy. Mimo kilkuletniego stażu w tworzeniu stron i aplikacji internetowych wciąż wiem, że istnieje niezliczona ilość frameworków, bibliotek i narzędzi do tworzenia front-endu, że nic tylko brać i je poznawać!
          </div>
          <div>
            Na obecnym etapie wgryzam się w sposoby zaawansowanego używania react'a i redux'a oraz bibliotek na nich opartych, np. <a href='https://github.com/ReactTraining/react-router' target='_blank' rel='noopener noreferrer'>react-router</a> czy <a href='https://github.com/redux-saga/redux-saga' target='_blank' rel='noopener noreferrer'>redux-saga</a>. W następnej kolejności mam ochotę zagłębić się w <a href='https://facebook.github.io/react-native/' target='_blank' rel='noopener noreferrer'>React Native</a>, oraz w sposoby dodawania elementów back-endowych do aplikacji internetowych (np. <a href='http://graphql.org/' target='_blank' rel='noopener noreferrer'>GraphQL</a>. A przecież jest jeszcze Angular, Express.js i tyle innych...
            </div>
          </article>
        </section>,


        //inside13
        <section className='withLeftHeader'>
          <h1>Mój autorski projekt</h1>
          <article>
            <div>
              "Powiedz mi, a zapomnę, pokaż mi, a zapamiętam, pozwól mi zrobić, a zrozumiem…"
            </div>
            <div>
              Wychodząc z tego słusznego w całej rozciągłości twierdzenia Konfucjusza - od razu staram się wykorzystać w praktyce materiał jaki aktualnie przyswajam. Dlatego stworzyłem autorską aplikację, w tym przypadku do nauki nut na pianino. Z jednej strony chciałbym ją w przyszłości rozwinąć do poziomu "pokazania całemu światu", a z drugiej - służy mi właśnie jako poligon do praktycznego rozwoju swoich umiejętności.
            </div>
            <div>
              <a
                href="http://kamilograpp.pl/"
                target={'_blank'}
                title={'Kliknij Mnie'}>
                <img
                  className='image100'
                  src={kamilograpp}
                  alt='Projekt KamilogrAPP'/>
              </a>
            </div>
          </article>
        </section>,

        //inside14
        <section className='withLeftHeader doubledHeader'>
          <h1>Mój autorski projekt cd.</h1>
          <article className='verticalJustified'>
            <div>
              Jeśli chcę się tą aplikacją "pochwalić" przed światem i ułatwić dzięki niej naukę nut każdemu chętnemu, wiem, że muszę ją zrobić po prostu dobrze (czytaj: "idealnie"). Wychodzi przy niej mój perfekcjonizm połączony z pracoholizmem, bo wystarczy, że zaimplementuję jedną rzecz a od razu rodzą mi się pomysły na pięć kolejnych "ficzerów". I tak w bez końca.
            </div>
            <div>
              <a
                href="http://kamilograpp.pl/"
                target={'_blank'}
                title={'Kliknij Mnie'}
                className='kamilograppLogoLink'>
                <img
                  alt='Projekt KamilogrAPP'
                  className='image100'
                  src={kamilograppLogo} />
              </a>
            </div>
            <div className='withSpace'>Aplikację tworzę (jakżeby inaczej) w react'cie wespół z redux'em.</div>
          </article>
        </section>,

        //inside15
        <section className='withLeftHeader doubledHeader'>
          <h1>Inne zainteresowania</h1>
          <article>
            <div className='moreLeftMargin'>
              Może trudno w to uwierzyć, ale poza programowaniem istnieją też inne rzeczy. W wolnym czasie zajmuję się również:
            </div>
          </article>
        </section>,


        //inside16
        <section className='withLeftHeader doubledHeader'>
          <h1>nauką gry na pianinie</h1>
          <article>
            <div>
              Jestem samoukiem i bardzo chciałbym się nauczyć improwizować na pianine, na razie uczę się robić to w poszczególnych tonacjach. Akordy już prawie znam, przynajmniej te podstawowe. Kiedyś zagram w Trójce! Na pewno!
            </div>
            <img className='image80 smaller' src={stareMiasto} alt='Pianino na Starym Mieście'/>
          </article>
        </section>,

        //17
        <section className='withLeftHeader doubledHeader'>
          <h1>improwizacją sceniczną</h1>
          <article>
            <div>
              <div>
                Na tzw. "impro" trafiłem zupełnym przypadkiem na początku 2016 roku, ale od tego czasu aktywnie uczestniczę w tego typu wydarzeniach, nie tylko jako publiczność, ale przede wszystkim jako uczestnik.
              </div>
              <div className='imagesWeb'>
                <img src={impro1} alt='impro 1'/>
                <img src={impro2} alt='impro 2'/>
              </div>
              <div>
                Uczęszczałem na kursy do Szkoły Impro, Impro.lab'u, Wigwama, ostatnio do szkoły "Só". Niemal w każdą niedzielę biorę udział w "dżemach impro".
              </div>
              <div className='imagesWeb'>
                <img src={impro3} alt='impro 3'/>
              </div>
            </div>
          </article>
        </section>,


        //18
        <section className='withLeftHeader doubledHeader'>
          <h1>prowadzeniem kanału na YouTube</h1>
          <article>
            <div>
              Jako Kamilogram tworzę klipy z karaoke do popularnych piosenek i udostępniam je na YouTube. Ale żeby się wyróżnić z wielu kanałów tworzących podobny materiał - aranżacje jakie tworzę do klipów brzmią jakby były grane na pianinie!
            </div>
            <div>
              <a
                href="https://www.youtube.com/user/Kamilogram"
                target='_blank' rel='noopener noreferrer'
                title='Piano karaoke do piosenki Sylwii Grzeszczak "Tamta dziewczyna". Zobacz kanał.'
                className='image100'>
                <img
                  className='image80 smaller'
                  alt='Kanał Kamilogram'
                  src={youtube} />
              </a>
            </div>
            <div>
              Kanał idzie mi całkiem nieźle, mam już ponad 650 tysięcy wyświetleń i ponad 1000 subskrybentów, z czego nie ukrywam że jestem bardzo dumny :)
            </div>
          </article>
        </section>,


        //19
        <section className='withLeftHeader'>
          <h1>A na koniec...</h1>
          <article className='descSections  verticalJustified'>
            <div>Zapraszam do zagrania w jedną z wiekowych gier, napisanych w okolicach 2012 roku jako projekty zaliczeniowe na jednym z przedmiotów jeszcze na studiach :)</div>
            <div>Uwaga - poprawnie działają niestety tylko w wersji desktopowej.</div>
              <div className='imagesWeb'>
                <div>
                  <div>AhmedMan</div>
                  <a
                    href="http://www.kamilglinski.pl/ahmedman"
                    target='_blank' rel='noopener noreferrer'
                    title='Zobacz grę'
                    className='imgAsLink'>
                    <img
                      className='image100 gamesImages'
                      alt='Gra Ahmedman'
                      src={ahmedman} />
                  </a>
                </div>
                <div>
                  <div>Galaxian</div>
                  <a
                    href="http://www.kamilglinski.pl/galaxian"
                    target='_blank' rel='noopener noreferrer'
                    title='Zobacz stronę'
                    className='imgAsLink'>
                    <img
                      alt='Gra Galaxian'
                      className='image100 gamesImages'
                      src={galaxian} />
                  </a>
                </div>
              </div>
              <footer>
                Obie gry jakie trzeba było na jednym z przedmiotów napisać wzorując się na ulubionych tytułach z kultowych konsol sprzed dwóch dekad takich jak np. Pegasus. Trzeba było je odtworzyć w czystym javascripcie.
              </footer>
              </article>
            </section>


            ];

            const appDesktop = <Impress hint={true}
              hintMessage='Do przechodzenia dalej użyj strzałek lub spacji!'
              progress={true}
              fallbackMessage={<p>Niestety <b>twoja przeglądarka lub urządzenie mobilne</b> nie wspiera elementów tej strony poprawnie. Jeśli tak jest, wejdź tu.</p>} >

              <Step
                data={stepView.step0}
                duration={1000}
                className='theVeryFirst'>
                {inside[0]}
              </Step>


              <Step
                data={stepView.step1}
                duration={1000}>
                {inside[1]}
              </Step>


              <Step
                data={stepView.step200}
                duration={800}
                className='withDemonstrableHeader taller'>
                {inside[2]}
              </Step>

              <Step
                data={stepView.step201}
                duration={700}
                className='transparent secondExperience'>
                {inside[3]}
              </Step>

              <Step
                data={stepView.step202}
                duration={700}
                className='transparent thirdExperience'>
                {inside[4]}
              </Step>

              {/* doświadczenie zawodowe 1 */}
              <Step data={stepView.step300}
                duration={900}>
                <section className='withLeftHeader doubledHeader'>
                  <h1>Doświadczenie zawodowe</h1>
                  <article className='withTimeline'>
                    <div className='timeline'>
                      <div className='timelineStrip1'/>
                      <div className='timelineStrip2'/>
                      <div className='timelineMarker'>
                        <span>listopad 2016<br/>-<br/>grudzień 2014<br/></span>
                        <div className='roundMarker' />
                        <div className='verticalLine1' />
                        <div className='verticalLine2' />
                      </div>
                      <div className='timelineStrip1'/>
                      <div className='timelineStrip2'/>
                      <div className='timelineMarker'>
                        <span>czerwiec 2014<br/>-<br/>styczeń 2014<br/></span>
                        <div className='roundMarker' />
                        <div className='verticalLine1' />
                        <div className='verticalLine2' />
                      </div>
                    </div>
                  </article>
                </section>
              </Step>

              {/* LEON SOFTWARE NIE MODYFIKOWAĆ */}
              <Step data={stepView.step301}
                duration={1000}
                className='withDemonstrableHeader'>
                {inside[5]}
              </Step>


              {/* lEON CZ 2 NIE MODYFIKOWAĆ */}
              <Step data={stepView.step3012}
                duration={1000}>
                {inside[6]}
              </Step>


              {/* DRUGIE DOŚWIADCZENIE ZAWODOWE */}
              <Step data={stepView.step300}
                duration={700}>
                <section className='withLeftHeader doubledHeader'>
                  <h1>Doświadczenie zawodowe</h1>
                  <article className='withTimeline'>
                    <div className='timeline'>
                      <div className='timelineStrip1'/>
                      <div className='timelineStrip2'/>
                      <div className='timelineMarker'>
                        <span>listopad 2016<br/>-<br/>grudzień 2014<br/></span>
                        <div className='roundMarker' />
                        <div className='verticalLine1' />
                        <div className='verticalLine2' />
                      </div>
                      <div className='timelineStrip1'/>
                      <div className='timelineStrip2'/>
                      <div className='timelineMarker'>
                        <span>czerwiec 2014<br/>-<br/>styczeń 2014<br/></span>
                        <div className='roundMarker' />
                        <div className='verticalLine1' />
                        <div className='verticalLine2' />
                      </div>
                    </div>
                  </article>
                </section>
              </Step>

              {/* NOBO GŁÓWNE */}
              <Step data={stepView.step302}
                duration={1500}
                className='withDemonstrableHeader'>
                {inside[7]}
              </Step>

              {/*  NOBO 2*/}
              <Step data={stepView.step3022}
                duration={1000}>
                {inside[8]}
              </Step>



              {/* wykształcenie */}
              <Step data={stepView.step400}
                duration={700}
                className='taller'>
                <section className='withLeftHeader'>
                  <h1>Wykształcenie</h1>
                  <article className='withTimeline'>
                    <div className='timeline'>
                      <div className='timelineStrip1'/>
                      <div className='timelineStrip2'/>
                      <div className='timelineMarker'>
                        <span>czerwiec<br/>2013<br/>-<br/>październik<br/>2011<br/></span>
                        <div className='roundMarker' />
                        <div className='verticalLine1' />
                        <div className='verticalLine2' />
                      </div>
                      <div className='timelineStrip1'/>
                      <div className='timelineStrip2'/>
                      <div className='timelineMarker'>
                        <span>lipiec<br/>2011<br/>-<br/>październik<br/>2008<br/></span>
                        <div className='roundMarker' />
                        <div className='verticalLine1' />
                        <div className='verticalLine2' />
                      </div>
                    </div>
                  </article>
                </section>
              </Step>


              {/* poITECHNIKA 1 */}
              <Step data={stepView.step401}
                duration={1000}
                className='withDemonstrableHeader'>
                {inside[9]}
              </Step>

              {/* POLITECHNIKA 2 */}
              <Step data={stepView.step4012}
                duration={1000}>
                {inside[10]}
              </Step>


              {/* wykształcenie drugie*/}
              <Step data={stepView.step400}
                duration={700}
                className='taller'>
                <section className='withLeftHeader'>
                  <h1>Wykształcenie</h1>
                  <article className='withTimeline'>
                    <div className='timeline'>
                      <div className='timelineStrip1'/>
                      <div className='timelineStrip2'/>
                      <div className='timelineMarker'>
                        <span>czerwiec<br/>2013<br/>-<br/>październik<br/>2011<br/></span>
                        <div className='roundMarker' />
                        <div className='verticalLine1' />
                        <div className='verticalLine2' />
                      </div>
                      <div className='timelineStrip1'/>
                      <div className='timelineStrip2'/>
                      <div className='timelineMarker'>
                        <span>lipiec<br/>2011<br/>-<br/>październik<br/>2008<br/></span>
                        <div className='roundMarker' />
                        <div className='verticalLine1' />
                        <div className='verticalLine2' />
                      </div>
                    </div>
                  </article>
                </section>
              </Step>


              {/* fizyka */}
              <Step data={stepView.step402}
                duration={1500}
                className='withDemonstrableHeader'>
                {inside[11]}
              </Step>


              {/* więcej o mnie */}
              <Step duration={1000} data={stepView.step7}>
                {inside[12]}
              </Step>


              {/* mój autorski projekt 1 */}
              <Step  duration={1000} data={stepView.step8}>
                {inside[13]}
              </Step>

              {/* mój autorski projekt 2 */}
              <Step  duration={1000} data={stepView.step81}>
                {inside[14]}
              </Step>

              {/* Inne zainteresowania */}
              <Step  duration={1000} data={stepView.step9}>
                {inside[15]}
              </Step>

              <Step
                duration={1000}
                data={stepView.step91}
                className='withDemonstrableHeader'>
                {inside[16]}
              </Step>

              <Step
                duration={1000}
                data={stepView.step92}
                className='withDemonstrableHeader'>
                {inside[17]}
              </Step>

              <Step
                duration={1000}
                data={stepView.step93}
                className='withDemonstrableHeader'>
                {inside[18]}
              </Step>


              <Step data={stepView.step10}
                duration={1000}>
                {inside[19]}
                {mainFooter}
              </Step>
            </Impress>

            const appDevice = <div className='devicePresentation'>
              <div id='background'/>
              <div className='step deviceStep'>
                {inside[0]}
              </div>
              <div className='step deviceStep'>
                {articleMain}
              </div>
              <div className='step deviceStep asideDevice'>
                {asideInside}
              </div>
              <div className='step deviceStep withBigHeader'>
                {inside[2]}
              </div>
              <div className='step deviceStep'>
                {inside[3]}
              </div>
              <div className='step deviceStep'>
                {inside[4]}
              </div>
              <div className='step deviceStep onlyHeader'>
                <section className='withLeftHeader doubledHeader'>
                  <h1>Doświadczenie zawodowe</h1>
                </section>
              </div>
              <div className='step deviceStep withSubHeader'>
                {inside[5]}
              </div>
              <div className='step deviceStep withoutH1'>
                {inside[6]}
              </div>
              <div className='step deviceStep withSubHeader'>
                {inside[7]}
              </div>
              <div className='step deviceStep withoutH1'>
                {inside[8]}
              </div>
              <div className='step deviceStep onlyHeader'>
                <section className='withLeftHeader'>
                  <h1>Wykształcenie</h1>
                </section>
              </div>
              <div className='step deviceStep withSubHeader'>
                {inside[9]}
              </div>
              <div className='step deviceStep withoutH1'>
                {inside[10]}
              </div>
              <div className='step deviceStep withSubHeader'>
                {inside[11]}
              </div>
              <div className='step deviceStep'>
                {inside[12]}
              </div>
              <div className='step deviceStep'>
                {inside[13]}
              </div>
              <div className='step deviceStep withoutH1'>
                {inside[14]}
              </div>
              <div className='step deviceStep'>
                {inside[15]}
              </div>
              <div className='step deviceStep withSubHeader'>
                {inside[16]}
              </div>
              <div className='step deviceStep withSubHeader'>
                {inside[17]}
              </div>
              <div className='step deviceStep withSubHeader'>
                {inside[18]}
              </div>
              <div className='step deviceStep'>
                {inside[19]}
              </div>
              <footer className='step deviceStep'>
                {deviceFooter}
              </footer>
            </div>;
            //
            if(mobileViewport.matches) {
              app = appDevice;
    } else {
      app = appDesktop;
    };


    return (
      <div className="App">
        {app}
      </div>
    );
  }
}

const Dotter = ({ value }) => {
  let dots=[];

  for(let i=0; i<10; i++) {
    if(i < value)
    dots.push(<span key={i} className='dot filledDot' />);
    else
    dots.push(<span key={i} className='dot emptyDot' />);
  }

  return (
    <span>
      {dots}
    </span>
  )
}

const PercCircle = ({value, size='small', color}) => {
  const classes = classNames(
    'c100',
    'p' + value,
    size,
    color,
  )

  return(
    <div className={classes}>
      <span>{value + '%'}</span>
      <div className="slice">
        <div className="bar"/>
        <div className="fill"/>
      </div>
    </div>
  )
}

const LineSlide = ({ value }) => {
  const lineSlideStyle = {
    width: value + '%',
  }

  return(
    <div className='LineSlideContainer' title='fdskh'>
      <div className='lineSlideMax'/>
      <div style={lineSlideStyle} className='lineSlide'/>
    </div>
  )
}

const LiSign = () => {
  return <img className='liSign' src={liSign} alt='>'/>
}

export default App;
