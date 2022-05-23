import React from "react"
import { HomePageContainer } from "./styled"
import Header from "../../components/Header/Header"
import { goToAllJobs, goToCreateJob } from "../../routes/coordinator"
import { useNavigate  } from "react-router-dom"
import Button from '@mui/material/Button'


const HomePageScreen = () => {
     let Navigate = useNavigate();

    return (
        <div>
        <Header />
        <HomePageContainer>
            <h1>LabeNinjas</h1>
            <h2>O talento certo no momento certo</h2>
            <Button onClick={() => goToCreateJob(Navigate)}>Quero ser um ninja</Button>
            <Button onClick={() => goToAllJobs(Navigate)}>Contratar um ninja</Button> 
        </HomePageContainer>
        </div>
    )
}

export default HomePageScreen