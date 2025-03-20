import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayMemoryCards from "../components/DisplayMemoryCards";
import { ActionType, cardReducer } from "../redcer/cardReducer";
import { handleCardClick } from "../utils/handleCardClick";
import { getCardCount } from "../utils/getCardCount";
import axios from "axios";
import DisplayModal from "../components/DisplayModal";
import { fetchAndShuffleCards } from "../utils/gameUtils";
import Spinner from "../components/Spinner";

const GamePage = () => {
    const [state, dispatch] = useReducer(cardReducer, {
        flippedCards: [],
        matchedCards: [],
        attempts: 0,
        loading: true,
        memory: []
    })
    const [showModal, setShowModal] = useState(false)
    const [gameStarted, setGameStarted] = useState(false)
    const [isGameFinished, setIsGameFinished] = useState(false)
    const difficulty = sessionStorage.getItem('difficulty') || 'Medium'
    const storedUsername = sessionStorage.getItem('username') || 'Unknown'
    const offset = 600
    const limit = getCardCount(difficulty)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {     
            await fetchAndShuffleCards(limit, offset, dispatch, setGameStarted)
        }
        fetchData()
    }, [])

    const onCardClick = (cardId: string) => {
        if(state.flippedCards.length === 1){
            dispatch({type: ActionType.incrementAttempts})
        }
        handleCardClick(cardId, state, dispatch, state.memory, )
    }
    
    const finishedGame = state.matchedCards.length === state.memory.length

    useEffect(() => {
        if(gameStarted && finishedGame) {
            setTimeout(async () => {
                setShowModal(true)
                    try {
                        await axios.put('http://localhost:3000/saveScore', {username: storedUsername, attempts: state.attempts, difficulty})
                        console.log('Score sent to backend successfully')
                    } catch (error) {
                        console.error('Error sending score to backend')
                    }
                setIsGameFinished(true)
            }, 1600);
        }
    }, [gameStarted, finishedGame])

    const retryGame = () => {
        setShowModal(false)
        setIsGameFinished(false)
        dispatch({type: ActionType.setLoading, payload: true})
        setTimeout(() => {   
            fetchAndShuffleCards(limit, offset, dispatch, setGameStarted)
            dispatch({ type: ActionType.resetMatchedCards})
        }, 1200);
        navigate('/gamePage', {state: {difficulty: difficulty}})
      }
    
      const changeDifficulty = () => {
        setShowModal(false)
        navigate('/difficulty')
      }

      const backBtn = () => {
        navigate('/difficulty')
      }

    if(state.loading) return <Spinner />

  return (
    <div className="text-center pt-20">
    {!isGameFinished && (
        <button onClick={backBtn} 
        className="border border-black px-1 text-2xl rounded-xl bg-blue-600 text-white hover:bg-blue-800 ease-in duration-100 cursor-pointer"
        >
            Back
        </button>
    )}
    <div className="flex flex-col justify-center items-center text-3xl my-16">
        <h1 className="mb-10">Level of difficulty: {difficulty}</h1>
        <h2 className="mb-16">Attempts: {state.attempts}</h2>
        {showModal && (
            <DisplayModal retryGame={retryGame} changeDifficulty={changeDifficulty} storedUsername={storedUsername} />
        )}
        {!showModal && (
            <DisplayMemoryCards handleCardClick={onCardClick} state={state} />
        )}
    </div>
    </div>
  )
}

export default GamePage