import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuiltControls from '../../components/Burger/BuiltControls/BuiltControls';

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
                <BuiltControls />
            </Aux>
        )
    }
}

export default BurgerBuilder;