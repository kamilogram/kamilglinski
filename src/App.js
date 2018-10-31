
import React from 'react';
import './App.css';
import 'react-impressjs/styles/react-impressjs.css';
import './css/circle.css';
import Desktop from './versions/Desktop';
import Mobile from './versions/Mobile';


const app = () => {
  const mobileViewport = window.matchMedia("screen and (max-width: 900px)");

  return (
    <div className="App">
      {mobileViewport.matches ? <Mobile /> : <Desktop />}
    </div>
  );
}

export default app;
