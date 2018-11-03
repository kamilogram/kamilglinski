import React from 'react';

const experiencesTimeline = () => (
  <section className='withLeftHeader doubledHeader'>
    <h1>Doświadczenie zawodowe</h1>
    <article className='withTimeline'>
      <div className='timeline horizontalTimeline'>
        <div className='timelineStrip1' />
        <div className='timelineStrip2' />

        <div className='timelineMarker outsideMarker'>
          <span>marzec 2018 -<br/>październik 2018<br/></span>
          <div className='roundMarker' />
          <div className='markerLine1' />
          <div className='markerLine2' />
        </div>

        <div className='timelineMarker'>
          <span>październik 2017 -<br/>luty 2018<br/></span>
          <div className='roundMarker' />
          <div className='markerLine1' />
          <div className='markerLine2' />
        </div>

        <div className='timelineMarker outsideMarker'>
          <span>grudzień 2014 -<br/>listopad 2016<br/></span>
          <div className='roundMarker' />
          <div className='markerLine1' />
          <div className='markerLine2' />
        </div>

        <div className='timelineMarker'>
          <span>styczeń 2014 -<br/>czerwiec 2014<br/></span>
          <div className='roundMarker' />
          <div className='markerLine1' />
          <div className='markerLine2' />
        </div>
      </div>
    </article>
  </section>
)


export default experiencesTimeline
