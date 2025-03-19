import { Dispatch } from "react"
import { ActionType, IAction } from "../redcer/cardReducer"
import { getCards } from "../services/cardService"
import { duplicateCards } from "./duplicateCards"
import { shuffle } from "./shuffleCards"

export const fetchAndShuffleCards = async (
    limit: number, 
    offset: number, 
    dispatch: Dispatch<IAction>, 
    setGameStarted: (gameStarted: boolean) => void) => {
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