import { Navigate } from "react-router-dom"

export const goToHomePage = (Navigate) => {
    Navigate("/")
}

export const goToAllJobs = (navigate) => {
    navigate("/alljobs")
}

export const goToJobDetail = (navigate, id) => {
    navigate(`/jobs/${id}`)
}

export const goToCartPage = (Navigate) => {
    Navigate("/cartpage")
}

export const goToPokemonDetail = (history, name, isPokedex) => {
    console.log("ispoke", isPokedex);
    isPokedex
      ? history.push(`/pokemon/${name}/telaPokedex`)
      : history.push(`/pokemon/${name}`);
  };

export const goToCreateJob = (navigate) => {
    navigate("/createjob")
}