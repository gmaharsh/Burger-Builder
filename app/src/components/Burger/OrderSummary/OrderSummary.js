import React from 'react';
import Aux from '../../../hoc/Aux';


const orderSummary = ( props ) =>{
    const ingridentsSummary = Object.keys(props.ingridents)
        .map(igKey => {
            return(<li><span style={{transform:'capitalize'}}>{igKey}</span>:{props.ingridents[igKey]}</li>)
        })

    return(
        <Aux>
            <h3>Your Burger Order Summary:-</h3>
            <p>It contains following items:</p>
            <ul>
                {ingridentsSummary}
            </ul>
        </Aux>
    )
};

export default orderSummary;