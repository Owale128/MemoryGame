
export interface IState {
    flippedCards: string[]
    matchedCards: string[]
    attempts: number;
}

export interface IAction {
    type: ActionType;
    payload?: string;
}

export enum ActionType {
    flipCard,
    resetFlippedCards,
    matchedCards,
    resetMatchedCards,
    incrementAttempts,
}

export const cardReducer = (state: IState, action: IAction) => {

    switch(action.type) {
        case ActionType.flipCard:

        if(state.matchedCards.includes(action.payload || '')) return state
            return{...state, flippedCards: [...state.flippedCards, action.payload!]}

            case ActionType.resetFlippedCards:
                return {...state, flippedCards: []}

                case ActionType.matchedCards:
                    return {...state, matchedCards: [...state.matchedCards, action.payload!],
                        flippedCards: []
                    }

                    case ActionType.incrementAttempts:
                        return {...state, attempts: state.attempts + 1}
                
                        case ActionType.resetMatchedCards:
                            return {...state, matchedCards: [], attempts: 0}

                    default:
                        return state;
        }
}