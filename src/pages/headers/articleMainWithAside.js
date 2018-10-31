import React from 'react';
import ArticleMain from '../../pages/headers/articleMain';
import AsideInside from '../../pages/headers/asideInside';

const articleMainWithAside = () => (
  <section className='withAside'>
    <ArticleMain />
    <aside>
      <AsideInside />
    </aside>
  </section>
)

export default articleMainWithAside;
