import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuiltControls from '../../components/Burger/BuiltControls/BuiltControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const ingridents_price = {
    salad : 0.8,
    bacon: 0.3,
    cheese: 0.6,
    meat:0.1
}

class BurgerBuilder extends Component{

    state= {
        ingridents : {
            salad : 0,
            bacon: 0,
            cheese: 0,
            meat:0
        },
        totalPrice : 4,
        purchasable : false,
        purchasing: false
    }

    updatePurchaseState (ingridents)  {
        const sum = Object.keys(ingridents).map(igKey =>{
            return ingridents[igKey];
        }).reduce((sum, el)=> {
            return sum + el;
        }, 0)
        this.setState({purchasable: sum > 0})
    }

    addIngredients = (type) => {
        const oldCount = this.state.ingridents[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingridents
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition =ingridents_price[type];
        const oldPrice = this.state.totalPrice;
        const new_price = oldPrice + priceAddition;
        this.setState({totalPrice: new_price, ingridents:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredients = (type) => {
        const oldCount = this.state.ingridents[type];
        if(oldCount <= 0 ){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingridents
        };
        updatedIngredients[type] = updatedCount;
        const deduction = ingridents_price[type];
        const oldPrice = this.state.totalPrice;
        const new_price = oldPrice - deduction;
        this.setState({totalPrice: new_price, ingridents:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () =>(
        this.setState({purchasing: true})
    )



    render(){
        const disabledInfo = {
            ...this.state.ingridents
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Aux>
                <Modal show= {this.state.purchasing}>
                    <OrderSummary ingridents ={this.state.ingridents} />
                </Modal>
                <Burger ingridents={this.state.ingridents} />
                <BuiltControls 
                add = {this.addIngredients}
                remove = {this.removeIngredients} 
                disabled= {disabledInfo}
                purchasable  = {this.state.purchasable}
                price = {this.state.totalPrice}
                clicked = {this.purchaseHandler} />
            </Aux>
        )
    }
}

export default BurgerBuilder;