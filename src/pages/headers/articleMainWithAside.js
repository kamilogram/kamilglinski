import React from 'react';
import ArticleMain from '../../pages/headers/articleMain.js';
import AsideInside from '../../pages/headers/asideInside.js';

const articleMainWithAside = () => (
  <section className='withAside'>
    <ArticleMain />
    <aside>
      <AsideInside />
    </aside>
  </section>
)

export default articleMainWithAside;
