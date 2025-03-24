import { useContext, useEffect, useReducer, useState } from "react";
import DisplayMemoryCards from "../components/DisplayMemoryCards";
import { ActionType, cardReducer } from "../redcer/cardReducer";
import { handleCardClick } from "../utils/handleCardClick";
import { getCardCount } from "../utils/getCardCount";
import DisplayModal from "../components/DisplayModal";
import { fetchAndShuffleCards } from "../utils/gameUtils";
import { ThemeContext } from "../context/ThemeContext";
import { saveScore } from "../services/cardService";
import BackBtn from "../components/BackBtn";
import Spinner from "../components/Spinner";
import useNavigation from "../hooks/useNavigation";

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
    const categoryId = parseInt(sessionStorage.getItem('categoryId') || '0')
    const category = sessionStorage.getItem('categoryName') || ''
    const cardCount = getCardCount(difficulty)
    const { goTo } = useNavigation()
    const theme = useContext(ThemeContext)
    
    useEffect(() => {
        const fetchData = async () => {     
            await fetchAndShuffleCards(categoryId, cardCount, dispatch, setGameStarted)
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
                        await saveScore(storedUsername, state.attempts, difficulty, category)
                        console.log('Score sent to backend successfully')
                    } catch (error) {
                        console.error('Error sending score to backend', error)
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
            fetchAndShuffleCards(categoryId, cardCount, dispatch, setGameStarted)
            dispatch({ type: ActionType.resetMatchedCards})
        }, 1200);
        goTo('/gamePage', {state: {difficulty: difficulty}})
      }

    if(state.loading) return <Spinner />

  return (
    <div className="text-center pb-14 relative">
    {!isGameFinished && (
        <div className="-mt-16 absolute left-8">
        <BackBtn navigateTo="/difficulty" />
        </div>
    )}
    <div className="flex flex-col justify-center items-center text-3xl">
        {!isGameFinished && <h1 className="mb-8 mt-10 ease-in duration-100" style={{color: theme.color}}>Attempts: {state.attempts}</h1>}
        {showModal && (
            <DisplayModal state={state} storedUsername={storedUsername} retryGame={retryGame} setShowModal={setShowModal} />
        )}
        {!showModal && (
            <DisplayMemoryCards handleCardClick={onCardClick} state={state} />
        )}
    </div>
    </div>
  )
}

export default GamePage