import React from 'react';
import ReactDOM from 'react-dom';

function ProtalDemo(props) {
    return ReactDOM.createPortal(
        <h1>
            Protal Demo
        </h1>,
        document.getElementById('portal-root')
    );
}

export default ProtalDemo;