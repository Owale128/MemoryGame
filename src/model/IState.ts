import { IGamePage } from "./IGamePage";

export interface IState {
    attempts: number;
    loading: boolean;
    memory: IGamePage[]
    flippedCards: string[];
    matchedCards: string[];
}