import React, { useEffect } from "react"
import GlobalStateContext from "./GlobalStateContext"
import { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { headers } from "../constants/urls"

const GlobalState = (props) => { 
      

    const [cart, setCart] = useState([])
    const [jobs, setJobs] = useState([])  

    const getJobs = () => {
        axios.get(`${BASE_URL}/jobs`, headers)
        .then((response) => setJobs(response.data.jobs)) //essa response tem um array com varios jobs dentro. / Eu setei o valor do estado job para esse array
        .catch((error) => console.log(error.message))
    }

    useEffect(() => {
        getJobs();
      }, []);


    useEffect(() => {
        console.log(cart)
      }, [cart]);

    const data = {
        cart: cart,
        setCart: setCart,
        jobs: jobs,
        setJobs: setJobs,
        getJobs: getJobs
    }
    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState 