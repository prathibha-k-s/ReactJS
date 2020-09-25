import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonCount from './Components/ButtonClick'
import HoverCount from './Components/HoverCount'


function App() {
  return (
    <div className="App"> 
     <ButtonCount name="Prathibha"></ButtonCount>
     <HoverCount></HoverCount>
    </div>
  );
}

export default App;
