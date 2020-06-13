import React from 'react';
import classes from './BuiltControls.css';
import BuildControl from './BuildControl/BuiltControl';

const controls = [
    {label: 'Salad' , type:'salad'},
    {label: 'Bacon' , type:'bacon'},
    {label: 'Cheese' , type:'cheese'},
    {label: 'Meat' , type:'meat'}
]

const buildControls = ( props ) => (
    <div className={classes.BuiltControls}>
        <p>Current Price of Burger is:- {props.price.toFixed(2)}</p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.key} 
            label={ctrl.label}
            added = {() => props.add(ctrl.type)}
            removed = {() => props.remove(ctrl.type)}
            disable = {props.disabled[ctrl.type]} />
        ))}
        <button className={classes.OrderButton} 
        disabled={!props.purchasable}
        onClick={props.clicked}>Order Now</button>
    </div>
);

export default buildControls;