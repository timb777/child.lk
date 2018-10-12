import React, { Component } from 'react';
import CNavBar from './components/ToolBar/Header';
import CFooter from './components/Footer/Footer';
import BSliders from './components/Body/Sliders/Sliders';
import MainBody from './components/Body/Main/Main';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>   
        <CNavBar />
        <BSliders />
        <br></br>
        <br></br>
        <MainBody />
        <CFooter />
      </div>
    );
  }
}

export default App;
