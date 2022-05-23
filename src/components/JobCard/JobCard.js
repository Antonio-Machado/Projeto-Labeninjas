import React from "react"
import { goToCartPage, goToJobDetail } from "../../routes/coordinator"
import { convertDate } from "../../utils/convertDate"
import { Card } from "./styled"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"
import { useContext } from "react"


//ACHO QUE A RESPOSTA PARA ADICIONAR AO CARRINHO VAI ESTAR NO ADICIONAR A POKEDEX.


const JobCard = (props) => {
    const { cart, setCart } = useContext(GlobalStateContext);
    let Navigate = useNavigate();

   
    const addToCart = () => {
        const newCartList = [...cart, props.job]
        setCart(newCartList)
    }

    return(
        <Card>
            <h1>{props.job.description}</h1>
            <strong>Preço:</strong><p>{props.job.price}</p>
            <strong>Prazo:</strong><p>{convertDate(props.job.dueDate)}</p>
            <button onClick={() => goToJobDetail(Navigate, props.job.id)}>Ver detalhes</button> 
            <button onClick={() => addToCart()}>Adicionar ao carrinho</button> 

            <input placeholder="Valor Mínimo"/>
                    <input placeholder="Valor Máximo"/>
                    <input placeholder="Busca por título ou descrição"/>
                    <select >
                        <option>Sem Ordenação</option>
                        <option>Menor Valor</option>
                        <option>Maior Valor</option>
                        <option>Título</option>
                        <option>Prazo</option>
                    </select>
        </Card>
    )
}

export default JobCard