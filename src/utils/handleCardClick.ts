import { Dispatch } from "react";
import { ActionType, IAction } from "../redcer/cardReducer";
import { IGamePage } from "../model/IGamePage";
import { IState } from "../model/IState";

export const handleCardClick = (
    cardId: string,
    state: IState,
    dispatch: Dispatch<IAction>,
    memory: IGamePage[],
   
) => {

    if(state.matchedCards.includes(cardId) || state.flippedCards.includes(cardId) || state.flippedCards.length === 2 ) return
    dispatch({type: ActionType.flipCard, payload: cardId})

    if(state.flippedCards.length === 1) {
        const firstCard = memory.find((card) => card.id === state.flippedCards[0]);
        const secondCard = memory.find((card) => card.id === cardId)

        if(firstCard && secondCard && firstCard.name === secondCard.name) {
            dispatch({ type: ActionType.matchedCards, payload: firstCard.id})
            dispatch({ type: ActionType.matchedCards, payload: secondCard.id})
        }

        setTimeout(() => {
            dispatch({ type: ActionType.resetFlippedCards})
        }, 2000);
    }
}