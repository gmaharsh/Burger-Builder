import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';

const Burger = ( props ) => {

    let transformedIngridents = Object.keys(props.ingridents)
        .map(igKey => {
            return [...Array(props.ingridents[igKey])].map((_, i) => {
                return <BurgerIngredients key={igKey + 1 } type={igKey} />;
            })
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    
    if(transformedIngridents.length === 0){
        transformedIngridents = <p>Please add Something</p>;
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformedIngridents}
            <BurgerIngredients type="bread-bottom" />
        </div>
    )
}

export default Burger;