import React, { Component } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';
import MemoComp from './MemoComp';

class ParentComp extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            name: 'Java'
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Java'
            })
        }, 2000)
    }

    render() {
        console.log('Parent Component Render');
        return (
            <div>
                Parent Component
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
                <MemoComp name={this.state.name} />
            </div>
        );
    }
}

export default ParentComp;