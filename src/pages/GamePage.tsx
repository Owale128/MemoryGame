import { useContext, useEffect, useReducer } from "react";
import DisplayMemoryCards from "../components/DisplayMemoryCards";
import { ActionType, cardReducer } from "../redcer/cardReducer";
import { handleCardClick } from "../utils/handleCardClick";
import { getCardCount } from "../utils/getCardCount";
import { fetchAndShuffleCards } from "../utils/gameUtils";
import { ThemeContext } from "../context/ThemeContext";
import { saveScore } from "../services/cardService";
import BackBtn from "../components/BackBtn";
import Spinner from "../components/Spinner";
import useNavigation from "../hooks/useNavigation";
import DisplayResult from "../components/DisplayResult";
import DisplayScoreList from "../components/DisplayScoreList";

const GamePage = () => {
    const [state, dispatch] = useReducer(cardReducer, {
        flippedCards: [],
        matchedCards: [],
        attempts: 0,
        loading: true,
        memory: [],
        error: null,
        showResult: false,
        gameStarted: false,
        isGameFinished: false,
        showScoreList: false
    })
    const { goTo } = useNavigation()
    const difficulty = sessionStorage.getItem('difficulty') || 'Medium'
    const storedUsername = sessionStorage.getItem('username') || 'Unknown'
    const categoryId = parseInt(sessionStorage.getItem('categoryId') || '0')
    const category = sessionStorage.getItem('categoryName') || ''
    const cardCount = getCardCount(difficulty)
    const {theme} = useContext(ThemeContext)
    
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
                dispatch({type: ActionType.setShowResult, payload: true})
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
       dispatch({type: ActionType.setShowResult, payload: false})
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
    <div className="text-center">
    {!state.isGameFinished && (
        <div className="absolute left-8 top-8 lg:left-12 lg:top-12">
        <BackBtn navigateTo="/difficulty" />
        </div>
    )}
    <div className="text-3xl">
        {!state.isGameFinished && <h1 className="mb-8 mt-26 md:mt-0 ease-in duration-100" style={{color: theme.color}}>Attempts: {state.attempts}</h1>}
        {state.showResult && !state.showScoreList &&(
            <>
            <DisplayResult state={state} storedUsername={storedUsername} retryGame={retryGame} dispatch={dispatch} />
            </>
        )}
        {state.showScoreList && (
        <DisplayScoreList dispatch={dispatch} />
        )}
        {!state.showResult && (
            <DisplayMemoryCards handleCardClick={onCardClick} state={state} />
        )}
    </div>
    </div>
  )
}

export default GamePage