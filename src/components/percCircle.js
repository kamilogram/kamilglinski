import React from 'react';
import '../css/circle.css';
import '../App.css';
import classNames from 'classnames';

const percCircle = ({value, size='small', color}) => {
  const classes = classNames(
    'c100',
    'p' + value,
    size,
    color,
  )

  return(
    <div className={classes}>
      <span>{value + '%'}</span>
      <div className="slice">
        <div className="bar"/>
        <div className="fill"/>
      </div>
    </div>
  )
}

export default percCircle
