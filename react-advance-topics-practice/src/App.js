import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonCount from './Components/ButtonClick'
import HoverCount from './Components/HoverCount'
import ButtonClick2 from './Components/ButtonClick2'
import HoverCount2 from './Components/HoverCount2'
import WithConterRP from './Components/withCounterRenderProp'
import ComponentC from './Components/ComponentC'
import { UserProvider } from './Components/UserContext';


function App() {
  return (
    <div className="App">
      {/* {/* <ButtonCount name="Prathibha"></ButtonCount>
     <HoverCount></HoverCount> 
     <ButtonClick2></ButtonClick2>
     <HoverCount2></HoverCount2> 
      <WithConterRP render={(count, clickHandler) => <ButtonClick2 count={count} clickHandler={clickHandler}> </ButtonClick2>}></WithConterRP>
      <WithConterRP render={(count, clickHandler) => <HoverCount2 count={count} clickHandler={clickHandler}> </HoverCount2>}></WithConterRP> */}
       <UserProvider value="Prathibha">
       <ComponentC></ComponentC>
       </UserProvider>
       
    </div>
  );
}

export default App;
