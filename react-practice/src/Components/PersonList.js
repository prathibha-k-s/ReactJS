import React from 'react'

function PersonList({personDetails}){
    return <div>
        <h1>HI I'm {personDetails.name} from {personDetails.place} </h1>
    </div>
}
export default PersonList