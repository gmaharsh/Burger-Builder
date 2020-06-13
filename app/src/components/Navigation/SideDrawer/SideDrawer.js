import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = ( ) =>{
    return(
        <div className={classes.SideDrawer}>
            <div>
                <Logo className={classes.Logo} />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default sideDrawer;