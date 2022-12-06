import React from "react"
import Navbar from "./Navbar"
import Cards from "./Cards"
import data from "./data"

export default function App () {
    const cards = data.map(item => {
        return (
            <Cards
                key={item.id}
                item={item}
                
       /> )
    })
    return (
        <div className="card--main">
           <Navbar />
           {cards}
        </div>
             )
    

    
}