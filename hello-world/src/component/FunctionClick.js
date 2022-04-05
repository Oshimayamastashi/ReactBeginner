import React from 'react';

function FunctionClick(props) {

    function clickHandler() {
        console.info("Button Click!!")
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    );
}

export default FunctionClick;