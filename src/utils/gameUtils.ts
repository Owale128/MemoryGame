import { Dispatch } from "react"
import { ActionType, IAction } from "../redcer/cardReducer"
import { duplicateCards } from "./duplicateCards"
import { shuffle } from "./shuffleCards"
import { cards } from "../data/cardsData"

export const fetchAndShuffleCards = async (
    categoryId: string,
    cardCount: number,
    dispatch: Dispatch<IAction>, 
) => {
        try {
            const memoryCards = cards.filter(card => card.categoryId.toString() === categoryId);
            const duplicatedCards = shuffle(duplicateCards(memoryCards).slice(0, cardCount))
            dispatch({type: ActionType.setMemory, payload: duplicatedCards})
            dispatch({type: ActionType.setGameStarted, payload: true})
        } catch {
            dispatch({type: ActionType.setError, payload: 'An error occurred while fetching cards' })
        } finally {
            setTimeout(() => {
                dispatch({type: ActionType.setLoading, payload: false })
            }, 1600);
        }
    }