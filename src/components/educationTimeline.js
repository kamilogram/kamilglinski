import React from 'react';

const educationTimeline = () => (
  <section className='withLeftHeader'>
    <h1>Wykształcenie</h1>
    <article className='withTimeline withVerticalTimeline'>
      <div className='timeline verticalTimeline'>
        <div className='timelineStrip1' />
        <div className='timelineStrip2' />
        <div className='timelineMarker'>
          <span>czerwiec<br/>2013<br/>-<br/>październik<br/>2011<br/></span>
          <div className='roundMarker' />
          <div className='markerLine1' />
          <div className='markerLine2' />
        </div>
        <div className='timelineMarker'>
          <span>lipiec<br/>2011<br/>-<br/>październik<br/>2008<br/></span>
          <div className='roundMarker' />
          <div className='markerLine1' />
          <div className='markerLine2' />
        </div>
      </div>
    </article>
  </section>
)


export default educationTimeline
