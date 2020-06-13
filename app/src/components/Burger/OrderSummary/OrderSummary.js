import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';


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
            <h5><span style= {{fontWeight: 'bold'}}>Total Price:-</span>{props.price.toFixed(2)}</h5>
            <p>Continue to Checkout</p>
            <Button btnType="Danger" click= {props.closed} >Cancel</Button>
            <Button btnType="Success" click= {props.continue}>Continue</Button>     
        </Aux>
    )
};

export default orderSummary;