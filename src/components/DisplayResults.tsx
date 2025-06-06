import { motion } from "framer-motion"
import QuitBtn from "./QuitBtn";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface IDisplayResults {
    retryGame: () => void;
    changeDifficulty: () => void;
    changeCategory: () => void;
    showScoreList: () => void;
}

const DisplayResults = ({retryGame, changeDifficulty, changeCategory, showScoreList}: IDisplayResults) => {
  const {theme }= useContext(ThemeContext)
    const storedUsername = sessionStorage.getItem('username') || 'Unknown'

  return (
    <motion.div
        className="modal-overlay text-center px-6 mt-16 sm:mt-0 sm:w-xl md:w-2xl: lg:w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        aria-live="assertive"
        >
    <motion.div
        className="modal-content "
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.8 }}
        aria-labelledby="resultTitle"
        aria-describedby="resultDescription"
    >
        <h1 id="resultTitle" style={{color: theme.color}} className="font-mono text-2xl mb-4  md:text-3xl md:mt-0 ease-in duration-100">Congratulations {storedUsername}</h1>
        <p id="resultDescription" style={{color: theme.color}} className="font-mono text-2xl mb-10 ease-in duration-100">You finished the game!</p>

        <button 
        className="w-full border rounded-xl text-3xl p-3 bg-green-500  hover:bg-white ease-in duration-150 cursor-pointer"
        style={{border: `2px solid ${theme.border}`}}
        onClick={retryGame}
        aria-label="Retry the game"
        >
            Retry
        </button>

        <button 
        className="w-full border rounded-xl text-3xl my-6 p-3 bg-amber-300 hover:bg-white ease-in duration-150 cursor-pointer"
        style={{border: `2px solid ${theme.border}`}}
        onClick={changeDifficulty}
        aria-label="Change difficulty level"
        >
        Difficulty
        </button>

        <button 
        className="w-full border rounded-xl text-3xl mb-6 p-3 bg-blue-400 hover:bg-white ease-in duration-150 cursor-pointer"
        style={{border: `2px solid ${theme.border}`}}
        onClick={changeCategory}
        aria-label="Change category"
        >
        Category
        </button>

        <button 
        className="w-full border rounded-xl text-3xl mb-6 p-3 bg-fuchsia-400 hover:bg-white ease-in duration-150 cursor-pointer"
        style={{border: `2px solid ${theme.border}`}}
        onClick={showScoreList}
        aria-label="View score list"
        >
        Show score list
        </button>

    </motion.div>
          <div className="absolute top-10 left-10">
           <QuitBtn navigateTo="/" aria-label="Quit the game"/>
          </div>
    </motion.div>
      
  )
}

export default DisplayResults
