import React from 'react';
import ArticleMain from './ArticleMain';
import AsideInside from './AsideInside';

const ArticleMainWithAside = () => (
  <section className='withAside'>
    <ArticleMain />
    <aside>
      <AsideInside />
    </aside>
  </section>
)

export default ArticleMainWithAside;
