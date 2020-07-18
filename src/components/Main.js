import React from 'react'
import Header from "./Header"
import axios from "axios"


const API_KEY = "017359035b9fc9c55068649bcf9a5ff5"


const Main = () => {

    const api_call = () => {
        const url = `api.openweathermap.org/data/2.5/weather?q=Liverpool&appid=${API_KEY}`
        //template literals 
    }
    return (
        <div className="main">
            <Header />
        </div>
    )
}

export default Main 