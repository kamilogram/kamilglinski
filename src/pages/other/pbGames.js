import React from 'react';
import galaxian from '../../images/galaxian.PNG';
import ahmedman from '../../images/ahmedman.PNG';

const pbGames = () => (
  <section className='withLeftHeader'>
    <h1>A na koniec...</h1>
    <article className='descSections  verticalJustified'>
      <div>Zapraszam do zagrania w jedną z gier, napisanych w okolicach 2012 roku jako projekty zaliczeniowe na jednym z przedmiotów jeszcze na studiach :)</div>
      <div className='imagesWeb'>
        <div>
          <div>AhmedMan</div>
          <a
            href="https://kamilogram.github.io/kamilglinski/apps/Ahmedman"
            target='_blank'
            rel='noopener noreferrer'
            title='Zobacz grę'
            className='imgAsLink'
          >
            <img
              className='image100 gamesImages'
              alt='Gra Ahmedman'
              src={ahmedman}
            />
          </a>
        </div>
        <div>
          <div>Galaxian</div>
          <a
            href="https://kamilogram.github.io/kamilglinski/apps/Galaxian"
            target='_blank'
            rel='noopener noreferrer'
            title='Zobacz stronę'
            className='imgAsLink'
          >
            <img
              alt='Gra Galaxian'
              className='image100 gamesImages'
              src={galaxian}
            />
          </a>
        </div>
      </div>
      <footer>
        Obie gry jakie trzeba było na jednym z przedmiotów napisać wzorując się na ulubionych tytułach z kultowych konsol sprzed dwóch dekad takich jak np. Pegasus. Trzeba było je odtworzyć w czystym javascripcie.
      </footer>
    </article>
  </section>
)

export default pbGames;
