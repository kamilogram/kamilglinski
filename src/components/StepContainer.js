import React from 'react';
import { Step } from 'react-impressjs';
import stepData from '../stepsData';

const StepContainer = (data, duration, className='', id, component) => (
  <Step
    data={stepData[data]}
    duration={duration}
    id={id}
    className={className}
  >
    {component}
  </Step>
)

export default StepContainer;
