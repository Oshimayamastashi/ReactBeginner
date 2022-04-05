import React from 'react';

function MemoComp({name}) {
    console.log('Rendering Memo Component')
    return (
        <div>
            Memo Component {name}
        </div>
    );
}

// Do the samething as PureComponent
export default React.memo(MemoComp);