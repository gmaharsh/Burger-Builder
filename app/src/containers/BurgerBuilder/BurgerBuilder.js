import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{

    state= {
        ingridents : {
            salad : 0,
            bacon: 0,
            cheese: 0,
            meat:0
        }
    }

    render(){
        return(
            <Aux>
                <Burger ingridents={this.state.ingridents} />
                <div>Burger Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;