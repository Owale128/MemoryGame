import { IGamePage } from "../model/IGamePage"

export const shuffle = (array: IGamePage[]) => {
    const shuffleArray = [...array]
    return shuffleArray.sort(() => Math.random() - 0.5)
}