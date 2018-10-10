import React, { Component } from 'react';
import Toolbar from './components/ToolBar/Toolbar';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>   
        <div className="Toolbar">
        <Toolbar />
      </div>
      <div className="Footer">
        <Footer/>
      </div>
    </div>
    );
  }
}

export default App;
