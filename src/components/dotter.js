import React from 'react'

const dotter = ({ value }) => {
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


export default dotter
