import React from 'react';
import LoginForm from './components/LoginForm';
import TestForm from './components/TestForm';
import PictureBackground from './components/PictureBackground';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <div class="row">
    //     <div class="col-md-6"><LoginForm /></div>
    //     {/* <div class="col-md-6"><PictureBackground /></div> */}
    //   </div>
    // </div>
    <div className="App">
      <div class="w3-row w3-border">
        <div class="w3-container"><LoginForm /></div>
      </div>
    </div>
  );
}

export default App;
