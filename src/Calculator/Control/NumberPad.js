import React from 'react';

import './NumberPad.css';

const numberPad = (props) => {
    return (
        <span className="Numberpad">
            <button className="button" onClick={props.clicked} >{props.number}</button>
        </span>
    );
}

export default numberPad;