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
import { BrowserRouter as Router, Link, NavLink, Prompt } from "react-router-dom";
import Route from "react-router-dom/Route"
import User from './RouterComponents/UserComponent'


function App() {
  return (
    <Router>
      <div className="App">
        {/* {/* <ButtonCount name="Prathibha"></ButtonCount>
     <HoverCount></HoverCount> 
     <ButtonClick2></ButtonClick2>
     <HoverCount2></HoverCount2> 
      <WithConterRP render={(count, clickHandler) => <ButtonClick2 count={count} clickHandler={clickHandler}> </ButtonClick2>}></WithConterRP>
      <WithConterRP render={(count, clickHandler) => <HoverCount2 count={count} clickHandler={clickHandler}> </HoverCount2>}></WithConterRP> 
       <UserProvider value="Prathibha">
       <ComponentC></ComponentC>
       </UserProvider> */}
        <ul>
          <li>
            <NavLink to="/" exact activeStyle={
              { color: 'green' }
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" exact activeStyle={
              { color: 'green' }
            }>About</NavLink>
          </li>
          <li>
            <NavLink to="/user/Prathibha" exact activeStyle={
              { color: 'green' }
            }>User 1</NavLink>
          </li>
          <li>
            <NavLink to="/user/Saanvi" exact activeStyle={
              { color: 'green' }
            }>User 2</NavLink>
          </li>
        </ul>
      
        <Route path="/" exact render={
          () => {
            return <h1> Hello this home page</h1>
          }
        }>
        </Route>
        <Route path="/about" exact render={
          () => {
            return <h1> Hello this about page</h1>
          }
        }>
        </Route>
        <Route path="/user/:username" exact strict component={User} >
        </Route>


      </div>
    </Router>
  );
}

export default App;
