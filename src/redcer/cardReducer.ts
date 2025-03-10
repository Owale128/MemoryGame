
export interface IState {
    flippedCards: string[]
    matchedCards: string[]
}

export interface IAction {
    type: ActionType;
    payload: string;
}

export enum ActionType {
    flipCard,
    resetFlippedCards,
    matchCards,
    resetMatchedCards
}

export const cardReducer = (state: IState, action: IAction) => {

    switch(action.type) {
        case ActionType.flipCard:
            return{...state, flippedCards: [...state.flippedCards, action.payload]}

            case ActionType.resetFlippedCards:
                return {...state, flippedCards: []}

                case ActionType.matchCards:
                    return {...state, matchedCards: [...state.matchedCards, action.payload],
                        flippedCards: []
                    }
                
                    case ActionType.resetMatchedCards:
                        return {...state, matchedCards: []}

                    default:
                        return state;
        }
}