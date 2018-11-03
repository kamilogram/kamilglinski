import React from 'react';
import { Step } from 'react-impressjs';
import stepData from '../stepsData';

const StepContainer = (data, duration, className='', id, componentArray) => (
  <Step
    data={stepData[data]}
    duration={duration}
    id={id}
    className={className}
  >
    {componentArray}
  </Step>
)

export default StepContainer;