import axios from "axios"
import React from "react"
import { CreateJobContainer } from "./styled"
import { headers } from "../../constants/urls"

const CreateJobScreen = () => {
    
    //createJob = () => {
        //const body = {
            //como colocar o valor que a pessoa digitou aqui?
       // }

        //axios.post(`${BASE_URL}/jobs`, body, headers)
        //.then((response) =>

    


    return (
        <CreateJobContainer>
            <h1>Cadastre seu serviço</h1>
            <input placeholder="Título" />
            <input placeholder="Descrição" />
            <input placeholder="Preço" />
            <select>
                    <option>Cartão de Débito</option>
                    <option>Cartão de Crédito</option>
                    <option>PayPal</option>
                    <option>Boleto</option>
                    <option>Pix</option>
                </select>
            <input placeholder="Prazo do Serviço" type="date" />
                <button>Cadastrar Serviço</button>
        </CreateJobContainer>
    )
}

export default CreateJobScreen