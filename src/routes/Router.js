import React from "react"
import { BrowserRouter , Routes , Route } from "react-router-dom"

import JobDetailScreen from "../screens/JobDetailScreen/JobDetailScreen"
import CartPageScreen from "../screens/CartPageScreen/CartPageScreen"
import ListScreen from "../screens/ListScreen/ListScreen"
import CreateJobScreen from "../screens/CreateJobScreen/CreateJobScreen"
import HomePageScreen from "../screens/HomePageScreen/HomePageScreen"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<HomePageScreen/>}/>
                <Route exact path={"/jobs/:id"} element={<JobDetailScreen/>}/>
                <Route exact path={"/createjob"} element={<CreateJobScreen/>}/>
                <Route exact path={"/cartpage"} element={<CartPageScreen/>}/>
                <Route exact path={"/alljobs"} element={<ListScreen/>}/>      
            </Routes>
        </BrowserRouter>
    )
}

export default Router