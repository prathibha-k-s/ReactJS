import React from 'react'
import PersonList from './PersonList'

const NameList=()=> {
    const names = ['Prathi','Jessica','vishali']
//     const persons =[
//         {
//          id:101,
//          name:'prathi',
//          age:22,
//          place:'mysore'
//     },
//     {
//         id:102,
//         name:'Jessica',
//         age: 24,
//         place:'Bangalore'
//    },
//    {
//     id:103,
//     name:'Vishalakshi',
//     age:23,
//     place:'AP'
// }
// ]
// //you cannot acces the key element in child component , here we defined ID has key
//     const personList =  persons.map(person=> <PersonList key ={person.id} personDetails={person}></PersonList>)  //we can call the other component and stored inside the variable and we can also the html code into a variable
//     //whatever u place inside the {javascript code} will eveluated by JSX  line no.29
// return <div> 
//  {personList}   
// </div>
const nameList = names.map((name,index) => <h2 key={index}> {index} {name}</h2>)
return<div>
    {nameList}
</div>


}

export default NameList 