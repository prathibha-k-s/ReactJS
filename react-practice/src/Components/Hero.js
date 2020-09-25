import React from 'react'

function Hero({name}){
    if(name=='joker'){
        throw new Error("NOt a hero")
    }

    return (
    <div>
        hero name is {name}
    </div>
    )
}

export default Hero