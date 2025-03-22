import { motion } from "framer-motion"
import QuitBtn from "./QuitBtn";

interface IDisplayModal {
    storedUsername: string;
    retryGame: () => void;
    changeDifficulty: () => void;
}

const DisplayModal = ({retryGame, changeDifficulty, storedUsername}: IDisplayModal) => {
  return (
    <motion.div
        className="modal-overlay mt-14"
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
        <h2 className="text-3xl mb-4 mt-8">Congratulations {storedUsername}</h2>
        <p className="text-2xl mb-32">You finished the game!</p>

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

        <QuitBtn navigateTo="/" />
    </motion.div>
    </motion.div>
      
  )
}

export default DisplayModal
