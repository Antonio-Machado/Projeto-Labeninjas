import React from "react"
import { Card } from "../JobCard/styled"
import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";

const CartCard = (props) => {
    const { setCart, cart } = useContext(GlobalStateContext);

    const newCart = cart;

    const removeItem = () => {
        newCart.splice(props.index, 1);
        setCart(newCart)
    } 

    return(
        <Card>
        <h3>{props.title}</h3>
        <p>{props.price}</p>
        </Card>   //como pegar o item que a pessoa adicionou no carrinho na tela do jobslist e fazer ele aparecer na tela do cartcard?
    )
}

export default CartCard