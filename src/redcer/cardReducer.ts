import { IGamePage } from "../model/IGamePage";

export interface IState {
    flippedCards: string[];
    matchedCards: string[];
    attempts: number;
    loading: boolean;
    memory: IGamePage[]
}

export interface IAction {
    type: ActionType;
    payload?: string | IGamePage[] | boolean;
}

export enum ActionType {
    flipCard,
    resetFlippedCards,
    matchedCards,
    resetMatchedCards,
    incrementAttempts,
    setLoading,
    setMemory
}

export const cardReducer = (state: IState, action: IAction) => {

    switch(action.type) {
        case ActionType.flipCard:

        if(state.matchedCards.includes(action.payload as string || '')) return state
            return{...state, flippedCards: [...state.flippedCards, action.payload as string]}

            case ActionType.resetFlippedCards:
                return {...state, flippedCards: []}

                case ActionType.matchedCards:
                    return {...state, matchedCards: [...state.matchedCards, action.payload as string],
                        flippedCards: []
                    }

                    case ActionType.incrementAttempts:
                        return {...state, attempts: state.attempts + 1}
                
                        case ActionType.resetMatchedCards:
                            return {...state, matchedCards: [], attempts: 0}

                            case ActionType.setLoading:
                                return {...state, loading: action.payload as boolean}

                                case ActionType.setMemory:
                                    return {...state, memory: action.payload as IGamePage[]}
                    default:
                        return state;
        }
}