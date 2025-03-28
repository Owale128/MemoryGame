import { Dispatch } from "react"
import { ActionType, IAction } from "../redcer/cardReducer"
import { getCards } from "../services/cardService"
import { duplicateCards } from "./duplicateCards"
import { shuffle } from "./shuffleCards"

export const fetchAndShuffleCards = async (
    categoryId: number,
    cardCount: number,
    dispatch: Dispatch<IAction>, 
) => {
        try {
            const memoryCards = await getCards(categoryId)
            const duplicatedCards = shuffle(duplicateCards(memoryCards).slice(0, cardCount))
            dispatch({type: ActionType.setMemory, payload: duplicatedCards})
            dispatch({type: ActionType.setGameStarted, payload: true})
        } catch (error) {
            console.error('Error fetching data:', error)
            dispatch({type: ActionType.setError, payload: 'An error occurred while fetching cards' })
        } finally {
            setTimeout(() => {
                dispatch({type: ActionType.setLoading, payload: false })
            }, 1600);
        }
    }