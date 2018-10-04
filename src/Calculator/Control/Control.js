import React from 'react';

import './Control.css'

const control = (props) => {
    return (

        <button className="ctrButton" onClick={props.clickOperation}>{props.name}</button>

    )
}

export default control;