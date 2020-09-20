import React from 'react'
//without destructing
// const Naming = (props )=>{
//     return(
//         <div>
//             My name is {props.name}
//         </div>
//     )
// }

//destructring in parameter
// const Naming = ({name,id})=>{
//     return(
//         <div>
//             My name is {name}
//         </div>
//     )
// }

//destructuring into a indivisual variable or function body 
const Naming = (props )=>{
    const {name, id}= props
    return(
        <div>
            My name is {name}
        </div>
    )
}



export default Naming