import { IGamePage } from "../model/IGamePage"

export const duplicateCards = (cards: IGamePage[]) => {
    return [...cards, ...cards]
}