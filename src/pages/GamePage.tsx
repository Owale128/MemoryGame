import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IGamePage } from "../model/IGamePage";
import DisplayMemoryCards from "../components/DisplayMemoryCards";

const GamePage = () => {
    const [memory, setMemory] = useState<IGamePage[]>([])
    const [loading, setLoading] = useState(true)
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const difficulty = queryParams.get('difficulty')

    console.log('Fetched dataa:', memory)

    const offset = 500
    const limit = 100
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

    if(loading) return <h2>Loading...</h2>

  return (
    <div className="flex flex-col justify-center items-center text-3xl my-16">
        <h1>Level of difficulty: {difficulty}</h1>
        <DisplayMemoryCards memory={memory}/>
    </div>
  )
}

export default GamePage
