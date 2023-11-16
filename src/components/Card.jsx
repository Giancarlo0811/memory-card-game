function Card({card, updateCurrentCards, randomCardOrder}) {
    
    function checkCard() {
        randomCardOrder();
        updateCurrentCards(card);
    }

    return (
        <div className="card" onClick={checkCard}>
            {card}
        </div>
    )
}

export default Card;