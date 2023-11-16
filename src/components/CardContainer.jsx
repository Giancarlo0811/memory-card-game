import { useState, useEffect } from "react";
import Card from "./Card";



function CardContainer({updateCurrentCards}) {

    const [isLoading, setIsloading] = useState(true);
    const [cards, setCards] = useState([1,2,3,4,5]);

    

    function randomCardOrder() {
        setCards(cards.sort(() => Math.random() > 0.5 ? -1 : 1));
    }
    
    return (
        <div className="card-container">
            {cards.map((card, index) => {
                return (
                    <div key={index}>
                        <Card 
                            card= {card}
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