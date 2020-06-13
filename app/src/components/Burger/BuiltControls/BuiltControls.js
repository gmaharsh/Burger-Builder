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
        {controls.map(ctrl => (
            <BuildControl key={ctrl.key} label={ctrl.label} />
        ))}
    </div>
);

export default buildControls;