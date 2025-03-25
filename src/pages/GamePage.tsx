import { useContext, useEffect, useReducer } from "react";
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
        memory: [],
        error: null,
        showModal: false,
        gameStarted: false,
        isGameFinished: false
    })
    const { goTo } = useNavigation()
    const difficulty = sessionStorage.getItem('difficulty') || 'Medium'
    const storedUsername = sessionStorage.getItem('username') || 'Unknown'
    const categoryId = parseInt(sessionStorage.getItem('categoryId') || '0')
    const category = sessionStorage.getItem('categoryName') || ''
    const cardCount = getCardCount(difficulty)
    const theme = useContext(ThemeContext)
    
    useEffect(() => {
        const fetchData = async () => {     
            await fetchAndShuffleCards(categoryId, cardCount, dispatch)
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
        if(state.gameStarted && finishedGame) {
            setTimeout(async () => {
                dispatch({type: ActionType.setShowModal, payload: true})
                    try {
                        await saveScore(storedUsername, state.attempts, difficulty, category)
                        console.log('Score sent to backend successfully')
                    } catch (error) {
                        console.error('Error sending score to backend', error)
                    }
                dispatch({type: ActionType.setIsGameFinished, payload: true}) 
            }, 1600);
        }
    }, [state.gameStarted, finishedGame])

    const retryGame = () => {
       dispatch({type: ActionType.setShowModal, payload: false})
        dispatch({type: ActionType.setIsGameFinished, payload: false})
        dispatch({type: ActionType.setLoading, payload: true})
        setTimeout(() => {   
            fetchAndShuffleCards(categoryId, cardCount, dispatch)
            dispatch({ type: ActionType.resetMatchedCards})
        }, 1200);
        goTo('/gamePage', {state: {difficulty: difficulty}})
      }

    if(state.loading) return <Spinner />

  return (
    <div className="text-center relative">
    {!state.isGameFinished && (
        <div className="absolute left-8 top-8 lg:left-12 lg:top-12">
        <BackBtn navigateTo="/difficulty" />
        </div>
    )}
    <div className="flex flex-col justify-center items-center text-3xl min-h-screen">
        {!state.isGameFinished && <h1 className="mb-8 mt-26 md:mt-0 ease-in duration-100" style={{color: theme.theme.color}}>Attempts: {state.attempts}</h1>}
        {state.showModal && (
            <DisplayModal state={state} storedUsername={storedUsername} retryGame={retryGame} dispatch={dispatch} />
        )}
        {!state.showModal && (
            <DisplayMemoryCards handleCardClick={onCardClick} state={state} />
        )}
    </div>
    </div>
  )
}

export default GamePage