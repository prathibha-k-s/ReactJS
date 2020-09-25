import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Welcome from './Components/Welcome'
import Subscribe from './Components/stateSubscribe'
import Count from './Components/Count'
import Name from './Components/Destructing'
import Naming from './Components/DestructuringInFunction'
import ClassEvents from './Components/ClassEventhandler'
import FunctionEvent from  './Components/FunctionEventhandler'
import EventBinding from './Components/EventBindin'
import ParentComponent from './Components/Parentcomponent'
import Greeting from './Components/ConditionalRendering'
import NameList from './Components/NameList'
import StyleSheet from './Components/StyleSheet'
import InlineFunction from './Components/inline'
import './Components/appStyle.css'
import Styles from './Components/appStyle.module.css'
import FormElements from './Components/form'
import LifeCycleA from './Components/LifeCycleA'
import FragmentDemo from './Components/FragamentDemo'
import Table from './Components/FragmentParentTable'
import ParentComp from './Components/ParentComp' 
import RefDemo from './Components/RefDemo';
import FocusParent from './Components/FocusInputParent'
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorBoundry from './Components/ErrorBoundry';



function App() {
  return (
    <div className="App">
     {/* <Header name="header1">
       This is for using the childern property in functional Components
       </Header>
     <Header name="header2"/>  
     <Welcome>
     This is for using the childern property in class Components
     </Welcome> 
     <Subscribe></Subscribe>
     <Count></Count>
     <Name name='Prathibha' id='s316495'></Name>
     <Naming name='Prathibha' id='s316495'></Naming> 
     <ClassEvents></ClassEvents>
     <FunctionEvent></FunctionEvent> 
     <EventBinding></EventBinding>
     <ParentComponent></ParentComponent>
     <Greeting></Greeting> 
     <NameList></NameList>
     <StyleSheet primary={true}></StyleSheet>
     <InlineFunction></InlineFunction>
     <h1 className='error'>Error</h1>
     <h1 className={Styles.success}>Success</h1>
     <FormElements></FormElements>
     <LifeCycleA></LifeCycleA>
     <FragmentDemo></FragmentDemo>
     <Table> </Table>
     <ParentComp/>
     <RefDemo></RefDemo>
     <FocusParent></FocusParent>
     <FocusParent></FocusParent>
     <PortalDemo></PortalDemo>*/}
     <ErrorBoundry>
     <Hero name="Superman"></Hero>
     </ErrorBoundry>
     
     <ErrorBoundry>
     <Hero name="joker"></Hero>
     </ErrorBoundry>
    
    </div>
  );
}

export default App;
