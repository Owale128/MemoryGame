import { motion } from "framer-motion"
import QuitBtn from "./QuitBtn";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import useNavigation from "../hooks/useNavigation";

interface IDisplayModal {
    retryGame: () => void;
    setShowModal: (modal: boolean) => void;
    storedUsername: string;
}

const DisplayModal = ({retryGame, setShowModal, storedUsername}: IDisplayModal) => {
    const { goTo } = useNavigation()
    const theme = useContext(ThemeContext)

    const changeDifficulty = () => {
        setShowModal(false)
        goTo('/difficulty')
      }

    const changeCategory = () => {
        setShowModal(false)
        goTo('/categories')
      }

  return (
    <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
    <motion.div
        className="modal-content text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.5 }}
    >
        <h2 style={{color: theme.color}} className="text-3xl mb-4 mt-8">Congratulations {storedUsername}</h2>
        <p style={{color: theme.color}} className="text-2xl mb-32">You finished the game!</p>

        <button 
        className="border rounded-xl px-1 text-3xl bg-green-500  hover:bg-white ease-in duration-150 cursor-pointer"
        onClick={retryGame}
        >
            Retry
        </button>
        <button 
        className="border rounded-xl px-1 text-3xl mx-10 bg-amber-300 hover:bg-white ease-in duration-150 cursor-pointer"
        onClick={changeDifficulty}
        >
        Change difficulty
        </button>

        <button 
        className="border rounded-xl px-1 text-3xl mx-10 bg-amber-300 hover:bg-white ease-in duration-150 cursor-pointer"
        onClick={changeCategory}
        >
        Change category
        </button>

        <QuitBtn navigateTo="/" />
    </motion.div>
    </motion.div>
      
  )
}

export default DisplayModal
