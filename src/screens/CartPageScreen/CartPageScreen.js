import React, { useContext } from "react"
import CartCard from "../../components/CartCard/CartCard"
import GlobalStateContext from "../../global/GlobalStateContext";



const CartPageScreen = () => {
    const { cart } = useContext(GlobalStateContext);
    return (
        <div>
            {cart.map( (item, i) => {
                return (
                    <CartCard name={item.name} index={i}/>
                )
            })}
            <p>Total: R$1200</p><button>Finalizar Compra</button><button>Voltar para a lista</button>
        </div>
    )
}

export default CartPageScreen