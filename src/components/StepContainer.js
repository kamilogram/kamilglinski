import React from 'react';
import { Step } from 'react-impressjs';
import s from '../stepsData';

const StepContainer = (data, duration, className='', id, componentArray) => (
  <Step
    data={s[data]}
    duration={duration}
    id={id}
    className={className}
  >
    {componentArray}
  </Step>
)

export default StepContainer;