import React from 'react';
import { Step } from 'react-impressjs';
import stepData from '../stepsData';

const StepContainer = (data, duration, className='', id, component) => (
  <Step
    data={stepData[data]}
    duration={duration}
    className={className}
    id={id}
  >
    {component}
  </Step>
)

export default StepContainer;
