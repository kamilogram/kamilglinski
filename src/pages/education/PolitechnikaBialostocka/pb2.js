import React from 'react';
import testWebGL from '../../../images/testWebGL.png';

const pb2 = () => (
  <section className='withLeftHeader doubledHeader'>
    <h1>Politechnika Białostocka</h1>
    <article className='verticalJustified subPageContentContainer'>
      <div>Jeden z testów stworzonych przeze mnie w trakcie pracy magisterskiej na potrzeby badania zdolności wyświetlania grafiki 3D w przeglądarkach. Test polegał na badaniu efektywności wyświetlania wielu obiektów 3D w zależnosci od ich ruchu, ilości i rodzajów nałożonych tekstur, poruszania kamerą itp.</div>
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
  </section>
)

export default pb2;
