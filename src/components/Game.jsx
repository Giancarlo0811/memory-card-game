import { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import logo from "../images/logo.png"

function Game() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [currentCards, setCurrentCards] = useState([]);

    function updateCurrentCards(card) {
        if (currentCards.indexOf(card) === -1) {
            setCurrentCards([...currentCards, card]);
        } 
        else {
            setCurrentCards([]);
            setScore(0);
        }
    }

    useEffect(() => {
        if (currentCards.length === 0) {
            setScore(0);
        }
        else {
            setScore(score + 1);
        }
    }, [currentCards]);

    useEffect(() => {
        if (score >= highScore) {
            setHighScore(score);
        }
    }, [score]);

    return (
        <div className="game-container">
            <div className="score-container">
                <div className="logo">
                    <img src={logo}/>
                </div>
                <h1 className="score">Puntaje Actual: {score}</h1>
                <h1 className="score">Puntaje Más Alto: {highScore}</h1>
            </div>
            <CardContainer updateCurrentCards={updateCurrentCards}/>
        </div>
    )
}

export default Game;