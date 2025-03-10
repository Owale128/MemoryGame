import { Dispatch } from "react";
import { ActionType, IAction, IState } from "../redcer/cardReducer";
import { IGamePage } from "../model/IGamePage";

export const handleCardClick = (
    cardId: string,
    state: IState,
    dispatch: Dispatch<IAction>,
    memory: IGamePage[]
) => {

    if(state.flippedCards.length === 2 || state.flippedCards.includes(cardId)) return
    dispatch({type: ActionType.flipCard, payload: cardId})

    if(state.flippedCards.length === 1) {
        const firstCard = memory.find((card) => card.id.toString() === state.flippedCards[0]);
        const secondCard = memory.find((card) => card.id.toString() === cardId)

        if(firstCard && secondCard && firstCard.name === secondCard.name) {
            dispatch({ type: ActionType.matchCards, payload: cardId})
        }

        setTimeout(() => {
            dispatch({ type: ActionType.resetFlippedCards, payload:''})
        }, 1000);
    }
}