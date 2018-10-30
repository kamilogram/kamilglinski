import React from 'react';
import lisign from '../images/liSign.png';

const liWithSign = ({ children }) => (
  <li>
    <img className='liSign' src={lisign} alt='>'/>
    {` ${children}`}
  </li>
)

export default liWithSign
