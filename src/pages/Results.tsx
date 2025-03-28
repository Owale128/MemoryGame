import { Dispatch  } from "react";
import useNavigation from "../hooks/useNavigation";
import { ActionType, IAction } from "../redcer/cardReducer";
import DisplayResults from "../components/DisplayResults";

interface IResults {
    retryGame: () => void;
    dispatch: Dispatch<IAction>
}

const Results = ({ retryGame, dispatch}: IResults) => {
    const { goTo } = useNavigation()

    const changeDifficulty = () => {
       dispatch({type: ActionType.setShowResult, payload: false})
        goTo('/difficulty')
      }

    const changeCategory = () => {
        dispatch({type: ActionType.setShowResult, payload: false})
        goTo('/categories')
      }
    const showScoreList = () => {
        dispatch({type: ActionType.setShowResult, payload: false})
        dispatch({type: ActionType.setShowScoreList, payload: true})
      }
  return (
    <div>

    <DisplayResults 
     retryGame={retryGame}
     changeDifficulty={changeDifficulty}
     changeCategory={changeCategory}
     showScoreList={showScoreList}
     />
      
    </div>
  )
}

export default Results
