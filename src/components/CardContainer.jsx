import { useState, useEffect } from "react";
import Card from "./Card";


function CardContainer({updateCurrentCards}) {

    const [isLoading, setIsloading] = useState(true);
    const [cards, setCards] = useState(null);

    // obtener datos de la API
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,47,180,242,244,331")
        .then(response => response.json())
        .then(data => {
            const possibleCards = data.map(data => ({
                name: data.name,
                image: data.image
            }))

            setCards(possibleCards);
            setIsloading(false);
        });
    },[]);

    function randomCardOrder() {
        setCards(cards.sort(() => Math.random() > 0.5 ? -1 : 1));
    }

    if(isLoading) {
        return (
            <div className="card-container">
                <h1>Cargando...</h1>
            </div>
        )
    }

    console.log(cards);

    return (
        <div className="card-container">
            {cards.map((card, index) => {
                return (
                    <div key={index} className="card">
                        <Card 
                            cardText = {card.name}
                            cardImage = {card.image}
                            updateCurrentCards={updateCurrentCards}
                            randomCardOrder={randomCardOrder}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default CardContainer;