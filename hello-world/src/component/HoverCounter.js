import React, { Component } from 'react';
import withComponent from './withCounter';

class HoverCounter extends Component {
    render() {
        const { count, incrementCount, name  } = this.props;
        return <h1 onMouseOver={incrementCount}>{name} Hovered {count} times </h1>;
    }
}

export default withComponent(HoverCounter, 10);