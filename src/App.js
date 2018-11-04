
import React from 'react';
import './App.css';
import 'react-impressjs/styles/react-impressjs.css';
import './css/circle.css';
import Desktop from './versions/Desktop';
import Mobile from './versions/Mobile';


export default class App extends React.Component {
  state = {
    isMobile: true,
  }
  
  updateDimensions() {
    this.setState(({ isMobile:wasMobile }) => {
      const isMobile = window.matchMedia("screen and (max-width: 900px)").matches;
      if(!wasMobile && isMobile) {
        window.location.reload(false); 
      }
      return {
        isMobile
      }
    });
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render () {return (
      <div className="App">
        {this.state.isMobile ? <Mobile /> : <Desktop />}
      </div>
    );
  }
}
