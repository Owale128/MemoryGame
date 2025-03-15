import { motion } from "framer-motion"
import QuitBtn from "./QuitBtn"

interface IDisplayModal {
    storedUsername: string;
    retryGame: () => void;
    changeDifficulty: () => void;
}

const DisplayModal = ({retryGame, changeDifficulty, storedUsername}: IDisplayModal) => {
  return (
    <>
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
        <h2 className="text-3xl mb-4">Congratulations {storedUsername}</h2>
        <p className="text-2xl mb-4">You finished the game!</p>

        <button 
        className="border rounded-xl px-1 text-2xl cursor-pointer"
        onClick={retryGame}
        >
            Retry
        </button>
        <button 
        className="border rounded-xl px-1 text-2xl cursor-pointer mx-10"
        onClick={changeDifficulty}
        >
        Change difficulty
        </button>

        <QuitBtn />
    </motion.div>
    </motion.div>
      
    </>
  )
}

export default DisplayModal
