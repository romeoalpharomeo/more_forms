import React from "react";
import './FormCard.css';

function FormCard(props) {
    const classes = 'form-card ' + props.className
    return <div className={classes}>{props.children}</div>;
}

export default FormCard;