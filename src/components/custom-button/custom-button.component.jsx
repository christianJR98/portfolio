import React from 'react';

import './custom-button.styles.scss';

const CustomButton = (props) =>{
    return(
        <button className="btn btn-info btn-lg px-4">{props.text}</button>
    )
}

export default CustomButton;