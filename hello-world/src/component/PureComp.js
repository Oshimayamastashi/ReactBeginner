import React, { PureComponent } from 'react';

class PureComp extends PureComponent {

    // PureComponent only re-render when there is difference in the shallow comparison of 
    // props or states
    render() {
        console.log('Pure Component Render');
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        );
    }
}

export default PureComp;