import { motion } from "framer-motion"
import QuitBtn from "./QuitBtn";
import { Dispatch, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import useNavigation from "../hooks/useNavigation";
import { ActionType, IAction } from "../redcer/cardReducer";

interface IDisplayResult {
    state: {attempts: number}
    storedUsername: string;
    retryGame: () => void;
    dispatch: Dispatch<IAction>
}

const DisplayResult = ({state, storedUsername, retryGame, dispatch}: IDisplayResult) => {
    const { goTo } = useNavigation()
    const {theme }= useContext(ThemeContext)
    const difficulty = sessionStorage.getItem('difficulty') || 'Medium'
    const category = sessionStorage.getItem('categoryName') || ''

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
    <motion.div
        className="modal-overlay flex flex-col justify-center items-center text-center px-6 mt-10 sm:mt-0 sm:w-xl md:w-2xl: lg:w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
    <motion.div
        className="modal-content "
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.8 }}
    >
        <h1 style={{color: theme.color}} className="text-3xl mb-4 ease-in duration-100">Congratulations {storedUsername}</h1>
        <p style={{color: theme.color}} className="text-2xl mb-10 ease-in duration-100">You finished the game!</p>
        <h2 className="mb-6 ease-in duration-100" style={{color: theme.color}}>Category: {category}</h2>
        <h3 className="mb-6 ease-in duration-100" style={{color: theme.color}}>Level of difficulty: {difficulty}</h3>
        <h4 className="mb-16 ease-in duration-100" style={{color: theme.color}}>Attempts: {state.attempts}</h4>

        <button 
        className="w-full border rounded-xl text-3xl p-3 bg-green-500  hover:bg-white ease-in duration-150 cursor-pointer"
        style={{border: `2px solid ${theme.border}`}}
        onClick={retryGame}
        >
            Retry
        </button>
        <button 
        className="w-full border rounded-xl text-3xl my-6 p-3 bg-amber-300 hover:bg-white ease-in duration-150 cursor-pointer"
        style={{border: `2px solid ${theme.border}`}}
        onClick={changeDifficulty}
        >
        Difficulty
        </button>

        <button 
        className="w-full border rounded-xl text-3xl mb-6 p-3 bg-blue-400 hover:bg-white ease-in duration-150 cursor-pointer"
        style={{border: `2px solid ${theme.border}`}}
        onClick={changeCategory}
        >
        Category
        </button>

        <button 
        className="w-full border rounded-xl text-3xl mb-6 p-3 bg-fuchsia-400 hover:bg-white ease-in duration-150 cursor-pointer"
        style={{border: `2px solid ${theme.border}`}}
        onClick={showScoreList}
        >
        Show score list
        </button>
    </motion.div>
          <div className="absolute top-10 left-10">
           <QuitBtn navigateTo="/" />
          </div>
    </motion.div>
      
  )
}

export default DisplayResult
