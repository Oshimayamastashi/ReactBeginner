import React from 'react'

//<Greet name="Java" heroName="ironMan" />
const Greet = ({name, heroName}) => {
    // const {name, heroName} = props
    return (
        <div>
            <h1>Greeting {name} a.k.a {heroName}</h1>
        </div>
    )    
}
export default Greet;