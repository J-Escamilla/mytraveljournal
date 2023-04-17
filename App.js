import React from "react"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"
import data from "./data"


export default function App() {
    const cards = data.map(card => {
        return (
            <Cards 
                key={card.id}
                card={card}
            />
          )
        }
     )
    return (
        <main>
            <Navbar />
            {cards}
        </main>
    )
}