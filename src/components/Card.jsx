import '../styles/card.css'

function Card({cardText, cardImage, updateCurrentCards, randomCardOrder}) {
    
    function checkCard() {
        randomCardOrder();
        updateCurrentCards(cardText);
    }

    return (
        <div onClick={checkCard} className="card">
            <img src={cardImage} className='card-image'/>
            <h1 className='card-name'>{cardText}</h1>
        </div>
    )
}

export default Card