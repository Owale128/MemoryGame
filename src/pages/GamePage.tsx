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
import NotFound from "../components/NotFound";

const GamePage = () => {
    const [state, dispatch] = useReducer(cardReducer, {
        flippedCards: [],
        matchedCards: [],
        attempts: 0,
        loading: true,
        memory: [],
        error: null,
        gameStarted: false,
        isGameFinished: false,
    })
    const { goTo } = useNavigation()
    const difficulty = sessionStorage.getItem('difficulty') || 'Medium'
    const storedUsername = sessionStorage.getItem('username') || 'Unknown'
    const categoryId = sessionStorage.getItem('categoryId') || '0'
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
                goTo('/result')
                    try {
                        await saveScore(storedUsername, state.attempts, difficulty, category)
                    } catch {
                        dispatch({type: ActionType.setError, payload: 'Error sending score to backend'})
                    }
                dispatch({type: ActionType.setIsGameFinished, payload: true}) 
            }, 1600);
        }
    }, [state.gameStarted, finishedGame])

    if(state.loading) return <Spinner />
    if(state.error) {
    return (
        <div className="text-center">
            <NotFound errorTxt={state.error}/>
            <BackBtn navigateTo="/difficulty" aria-label="Back to Difficulty Selection" />
        </div>
        )
    }

  return (
    <div className="text-center">
    {!state.isGameFinished && (
        <div className="absolute left-8 top-8 lg:left-12 lg:top-12">
        <BackBtn navigateTo="/difficulty" aria-label="Back to Difficulty Selection" />
        </div>
    )}
    <div className="text-3xl landscape:my-20">
        {!state.isGameFinished && 
        <h1 
        className="mb-8 mt-26 md:mt-0 ease-in duration-100 font-mono" 
        style={{color: theme.color}}
        aria-live="polite"
        >
            Attempts: {state.attempts}
        </h1>
        }
        <div aria-live="polite">
        <DisplayMemoryCards handleCardClick={onCardClick} state={state} />
        </div>
    </div>
    </div>
  )
}

export default GamePage