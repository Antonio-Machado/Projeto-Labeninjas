import React from "react"
import { HeaderContainer } from "./styled"
import { goToCartPage } from "../../routes/coordinator"
import { Navigate } from "react-router-dom"

const Header = () => {
    return(
        <HeaderContainer>
            <h1>LabeNinjas</h1>
            <button>Home</button>
            <button onClick={() => goToCartPage(Navigate)}>Carrinho</button>
        </HeaderContainer>
    )
}

export default Header