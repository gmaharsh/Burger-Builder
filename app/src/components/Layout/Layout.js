import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideBar and NavBar</div>
        <main className= {classes.Component}>
            {props.children}
        </main>
    </Aux>
)

export default layout;