import { IGamePage } from "../model/IGamePage";
import { IState } from "../model/IState";

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
  setMemory,
  setError,
  setShowModal,
  setShowScoreList,
  setGameStarted,
  setIsGameFinished,
}

export const cardReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ActionType.flipCard:
      if (state.matchedCards.includes((action.payload as string) || ""))
        return state;
      return {
        ...state,
        flippedCards: [...state.flippedCards, action.payload as string],
      };

    case ActionType.resetFlippedCards:
      return { ...state, flippedCards: [] };

    case ActionType.matchedCards:
      return {
        ...state,
        matchedCards: [...state.matchedCards, action.payload as string],
        flippedCards: [],
      };

    case ActionType.incrementAttempts:
      return { ...state, attempts: state.attempts + 1 };

    case ActionType.resetMatchedCards:
      return { ...state, matchedCards: [], attempts: 0 };

    case ActionType.setLoading:
      return { ...state, loading: action.payload as boolean };

    case ActionType.setMemory:
      return { ...state, memory: action.payload as IGamePage[] };

    case ActionType.setError:
      return { ...state, error: action.payload as string };

    case ActionType.setShowModal:
      return { ...state, showModal: action.payload as boolean };

    case ActionType.setGameStarted:
      return { ...state, gameStarted: action.payload as boolean };

    case ActionType.setIsGameFinished:
      return { ...state, isGameFinished: action.payload as boolean };

      case ActionType.setShowScoreList:
        return {...state, showScoreList: action.payload as boolean}
        
    default:
      return state;
  }
};
