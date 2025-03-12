import axios from "axios";
import { useEffect, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DisplayMemoryCards from "../components/DisplayMemoryCards";
import { ActionType, cardReducer } from "../redcer/cardReducer";
import { handleCardClick } from "../utils/handleCardClick";
import { getCardCount } from "../utils/getCardCount";
import { shuffle } from "../utils/shuffle";
import { duplicateCards } from "../utils/duplicateCards";

const GamePage = () => {
    const [state, dispatch] = useReducer(cardReducer, {
        flippedCards: [],
        matchedCards: [],
        attempts: 0,
        loading: true,
        memory: []
    })
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const difficulty = queryParams.get('difficulty')
    const offset = 600
    const limit = getCardCount(difficulty)
    const apiKey = import.meta.env.VITE_MARVEL_API_KEY

    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
                try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?limit=${limit}&offset=${offset}&apikey=${apiKey}`)
                const memoryCards = response.data.data.results
                const duplicatedCards = shuffle(duplicateCards(memoryCards))
                dispatch({type: ActionType.setMemory, payload: duplicatedCards})
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                dispatch({type: ActionType.setLoading, payload: false })
            }
        }
        fetchData()
    }, [])

    const onCardClick = (cardId: string) => {
        if(state.flippedCards.length === 1){
            dispatch({type: ActionType.incrementAttempts})
        }

        handleCardClick(cardId, state, dispatch, state.memory, )

        if(state.matchedCards.length === state.memory.length - 1) {
            navigate('/scorePage', {state: {attempts: state.attempts}})
        }
    }
    
    if(state.loading) return <h2 className="text-center text-3xl">Loading...</h2>

  return (
    <div className="flex flex-col justify-center items-center text-3xl my-16">
        <h1 className="mb-10">Level of difficulty: {difficulty}</h1>
        <h2>Attempts: {state.attempts}</h2>
        <DisplayMemoryCards handleCardClick={onCardClick} state={state} />
    </div>
  )
}

export default GamePage
