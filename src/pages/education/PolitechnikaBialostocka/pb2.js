import React from 'react';
import testWebGL from '../../../images/testWebGL.png';

const IMG_TITLE = 'Screen z testu wydajności grafiki 3D w przeglądarkach';

const pb2 = () => (
  <section className='withLeftHeader doubledHeader'>
    <h1>Politechnika Białostocka</h1>
    <article className='verticalJustified subPageContentContainer'>
      <div>Jeden z testów stworzonych przeze mnie w trakcie pracy magisterskiej na potrzeby badania wydajności wyświetlania grafiki 3D w przeglądarkach. Test polegał na badaniu efektywności wyświetlania wielu obiektów 3D w zależnosci od ich ruchu, ilości i rodzajów nałożonych tekstur, poruszania kamerą itp.</div>
      <img
        alt={IMG_TITLE}
        title={IMG_TITLE}
        className='image100'
        src={testWebGL}
      />
    </article>
  </section>
)

export default pb2;
