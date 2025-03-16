import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayMemoryCards from "../components/DisplayMemoryCards";
import { ActionType, cardReducer } from "../redcer/cardReducer";
import { handleCardClick } from "../utils/handleCardClick";
import { getCardCount } from "../utils/getCardCount";
import { shuffle } from "../utils/shuffle";
import { duplicateCards } from "../utils/duplicateCards";
import { getCards } from "../services/cardService";
import axios from "axios";
import DisplayModal from "../components/DisplayModal";

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
                try {
                const memoryCards = await getCards(limit, offset)
                const duplicatedCards = shuffle(duplicateCards(memoryCards))
                dispatch({type: ActionType.setMemory, payload: duplicatedCards})
                setGameStarted(true)
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                dispatch({type: ActionType.setLoading, payload: false })
            }
        }
        fetchData()
    }, [])

    const sendScoreToBackend = async (username: string, attempts: number, difficulty: string) => {
      try {
          await axios.post('http://localhost:3000/saveScore', {username, attempts, difficulty})
          console.log('Score sent to backend successfully')
      } catch (error) {
          console.error('Error sending score to backend')
      }
    }

    const onCardClick = (cardId: string) => {
        if(state.flippedCards.length === 1){
            dispatch({type: ActionType.incrementAttempts})
        }

        handleCardClick(cardId, state, dispatch, state.memory, )
    }
        const finishedGame = state.matchedCards.length === state.memory.length

        useEffect(() => {
            if(gameStarted && finishedGame) {
                setTimeout(() => {
                    setShowModal(true)
                    sendScoreToBackend(storedUsername, state.attempts, difficulty)
                    setIsGameFinished(true)
                }, 1600);
            }
        }, [gameStarted, finishedGame])
    
    const retryGame = () => {
        setShowModal(false)
        setIsGameFinished(false)
        navigate('/gamePage', {state: {difficulty: difficulty}})
        dispatch({ type: ActionType.resetMatchedCards})
      }
    
      const changeDifficulty = () => {
        setShowModal(false)
        navigate('/difficulty')
      }

      const backBtn = () => {
        navigate('/difficulty')
      }


    if(state.loading) return <h2 className="text-center text-3xl">Loading...</h2>

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