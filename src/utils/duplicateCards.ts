import { IGamePage } from "../model/IGamePage"

export const duplicateCards = (cards: IGamePage[]) => {
    return cards.flatMap((card, index) => [
        {...card, id: `${card.id}- ${index * 2}`},
        {...card, id: `${card.id}- ${index * 2 + 1}`},
    ])
}