import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useLocation } from "react-router-dom";
import { IGamePage } from "../model/IGamePage";
import DisplayMemoryCards from "../components/DisplayMemoryCards";
import { cardReducer } from "../redcer/cardReducer";
import { handleCardClick } from "../utils/handleCardClick";

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

    console.log('Fetched dataa:', memory)

    const offset = 600
    const limit = 10
    const apiKey = import.meta.env.VITE_MARVEL_API_KEY

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?limit=${limit}&offset=${offset}&apikey=${apiKey}`)
                setMemory(response.data.data.results)
            }
            fetchData()
        } catch (error) {
            console.error('Error fetching data:', error)
        } finally {
            setLoading(false)
        }
    }, [])

    const onCardClick = (cardId: string) => {
        handleCardClick(cardId, state, dispatch, memory)
    }

    if(loading) return <h2>Loading...</h2>

  return (
    <div className="flex flex-col justify-center items-center text-3xl my-16">
        <h1>Level of difficulty: {difficulty}</h1>
        <DisplayMemoryCards memory={memory} handleCardClick={onCardClick} />
    </div>
  )
}

export default GamePage
