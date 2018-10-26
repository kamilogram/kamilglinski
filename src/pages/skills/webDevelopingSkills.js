import React from 'react';
import PercCircle from '../../components/percCircle.js';

const webDevelopingSkills = () => (
  <section>
    <article className='withPercCircles'>
      <header>inne</header>
      <div>
        <div>Git</div>
        <div>
          <PercCircle value={60} color='green' />
        </div>
      </div>
      <div>
        <div>Sass</div>
        <div>
          <PercCircle value={70} color='green' />
        </div>
      </div>
      <div>
        <div>RWD</div>
        <div>
          <PercCircle value={60} color='green' />
        </div>
      </div>
      <div>
        <div>React Native</div>
        <div>
          <PercCircle value={50} color='green' />
        </div>
      </div>
    </article>
  </section>
)

export default webDevelopingSkills;
