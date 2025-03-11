import { IGamePage } from "../model/IGamePage"

export const shuffle = (array: IGamePage[]) => {
    return array.sort(() => Math.random() - 0.5)
}