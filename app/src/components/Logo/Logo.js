import React from 'react';
import burgerLogo from '../../assets/Images/burger.png';
import classes from './Logo.css';

const Logo = ( props ) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="burger Logo"/>
    </div>
)

export default Logo;