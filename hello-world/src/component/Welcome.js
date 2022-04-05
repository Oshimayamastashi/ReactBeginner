import React, { Component } from 'react'

//<Welcome name="Melody" heroName="Black Widow" />
class Welcome extends Component {
    render() {
        const {name, heroName} = this.props
        return <h1>Welcome {name} a.k.a {heroName}</h1>
    }
}

export default Welcome