import { motion } from "framer-motion"
import QuitBtn from "./QuitBtn";
import { Dispatch, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import useNavigation from "../hooks/useNavigation";
import { ActionType, IAction } from "../redcer/cardReducer";

interface IDisplayModal {
    state: {attempts: number}
    storedUsername: string;
    retryGame: () => void;
    dispatch: Dispatch<IAction>
}

const DisplayModal = ({state, storedUsername, retryGame, dispatch}: IDisplayModal) => {
    const { goTo } = useNavigation()
    const theme = useContext(ThemeContext)
    const difficulty = sessionStorage.getItem('difficulty') || 'Medium'

    const changeDifficulty = () => {
       dispatch({type: ActionType.setShowModal, payload: false})
        goTo('/difficulty')
      }

    const changeCategory = () => {
        dispatch({type: ActionType.setShowModal, payload: false})
        goTo('/categories')
      }

  return (
    <motion.div
        className="modal-overlay w-full p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
    <motion.div
        className="modal-content flex flex-col justify-center items-center text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.5 }}
    >
        <h1 style={{color: theme.theme.color}} className="text-3xl mb-4 ease-in duration-100">Congratulations {storedUsername}</h1>
        <p style={{color: theme.theme.color}} className="text-2xl mb-10 ease-in duration-100">You finished the game!</p>
        <h2 className="mb-6 ease-in duration-100" style={{color: theme.theme.color}}>Level of difficulty: {difficulty}</h2>
        <h3 className="mb-20 ease-in duration-100" style={{color: theme.theme.color}}>Attempts: {state.attempts}</h3>

        <button 
        className="w-full sm:w-2xl md:w-3xl border rounded-xl text-3xl p-3 bg-green-500  hover:bg-white ease-in duration-150 cursor-pointer"
        style={{border: `2px solid ${theme.theme.border}`}}
        onClick={retryGame}
        >
            Retry
        </button>
        <button 
        className="w-full sm:w-2xl md:w-3xl border rounded-xl text-3xl my-6 p-3 bg-amber-300 hover:bg-white ease-in duration-150 cursor-pointer"
        style={{border: `2px solid ${theme.theme.border}`}}
        onClick={changeDifficulty}
        >
        Difficulty
        </button>

        <button 
        className="w-full border sm:w-2xl md:w-3xl rounded-xl text-3xl mb-6 p-3 bg-blue-400 hover:bg-white ease-in duration-150 cursor-pointer"
        style={{border: `2px solid ${theme.theme.border}`}}
        onClick={changeCategory}
        >
        Category
        </button>

        <QuitBtn navigateTo="/" />
    </motion.div>
    </motion.div>
      
  )
}

export default DisplayModal
