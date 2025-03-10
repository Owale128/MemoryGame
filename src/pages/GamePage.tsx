import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useLocation } from "react-router-dom";
import { IGamePage } from "../model/IGamePage";
import DisplayMemoryCards from "../components/DisplayMemoryCards";
import { cardReducer } from "../redcer/cardReducer";
import { handleCardClick } from "../utils/handleCardClick";
import { getCardCount } from "../utils/getCardCount";

const GamePage = () => {
    const [memory, setMemory] = useState<IGamePage[]>([])
    const [loading, setLoading] = useState(true)
    const [state, dispatch] = useReducer(cardReducer, {
        flippedCards: [],
        matchedCards: []
    })
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const difficulty = queryParams.get('difficulty')

    const offset = 600
    const limit = getCardCount(difficulty)
    const apiKey = import.meta.env.VITE_MARVEL_API_KEY

    

    useEffect(() => {
        const fetchData = async () => {
                try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?limit=${limit}&offset=${offset}&apikey=${apiKey}`)
                const memoryCards = response.data.data.results
                const duplicatedCards = shuffle(duplicateCards(memoryCards))
                setMemory(duplicatedCards)
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const shuffle = (array: IGamePage[]) => {
        return array.sort(() => Math.random() - 0.5)
    }

    const duplicateCards = (cards: IGamePage[]) => {
        return [...cards, ...cards]
    }

    const onCardClick = (cardId: string) => {
        handleCardClick(cardId, state, dispatch, memory)
    }

    if(loading) return <h2 className="text-center">Loading...</h2>

  return (
    <div className="flex flex-col justify-center items-center text-3xl my-16">
        <h1 className="mb-10">Level of difficulty: {difficulty}</h1>
        <DisplayMemoryCards memory={memory} handleCardClick={onCardClick} />
    </div>
  )
}

export default GamePage
