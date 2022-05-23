import React from "react"
import JobCard from "../../components/JobCard/JobCard"
import { FiltersContainer } from "./styled"
import { JobsListContainer } from "./styled"
import { useEffect } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"
import { useContext } from "react"
import CartCard from "../../components/CartCard/CartCard"
import { Grid , Item  } from "./styled"





const ListScreen = () => {
    const {jobs, getJobs, cart} = useContext(GlobalStateContext) 


//eu tenho que fazer um map no jobs para cada um retornar um jobCard

    useEffect(() => {
        getJobs()
    }, [])    


    return (
        <div>
    <Grid>
        <Item>
            <h2>Jobs:</h2>
            {
                jobs.map((job) => {
                    return <JobCard key={job.id} job={job}/>
                })
            }
        </Item>
        <Item>
            <h2>Cart:</h2>
                {
                    cart.map((item) => {
                        return <CartCard key={item.id} title={item.title} price={item.price}/>
                    })
                }
        </Item>
    </Grid>
                    
               

              
                    

                
             

        
            </div>
    )
}

export default ListScreen