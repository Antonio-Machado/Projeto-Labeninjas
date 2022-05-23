import React, { useEffect } from "react"
import { JobDetailContainer } from "./styled"
import { useState  } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URL, headers } from "../../constants/urls"
import { convertDate } from "../../utils/convertDate"

const JobDetailScreen = () => {
    const  { id } = useParams()

    const [jobDetail, setJobDetail] = useState([]) //seria o equivalente a pokedex (parte da aplicação que precisa de um específico) 

    const getJobDetail = () => {
        axios.get(`${BASE_URL}/jobs/${id}`, headers)
        .then((response) => setJobDetail(response.data))
        .catch((error) => console.log(error.message))
    }

    useEffect(() => {
        getJobDetail()
    }, [])

    return (
        <JobDetailContainer>
        <h1>{jobDetail.title}</h1>
        <p>{jobDetail.price}</p>
        <p>{jobDetail.dueDate}</p> 
        <p>{jobDetail.description}</p>
        <p>{jobDetail.paymentMethods}</p>
        <button>Voltar para a lista</button>
        </JobDetailContainer>
    )
}

export default JobDetailScreen