import React from 'react'
import './Styling.css'

function StyleSheet(props){
    let className=props.primary?'primary':''
    return<div>
        <h1 className={`${className} font-xl`}>Style King</h1>
    </div>
}
export default StyleSheet