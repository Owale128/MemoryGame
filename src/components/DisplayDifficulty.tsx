import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"

interface IDisplayDifficulty {
    handleDifficulty: (diffi: string) => void;
}

const DisplayDifficulty = ({handleDifficulty}: IDisplayDifficulty) => {
  const location = useLocation()
  const {theme} = useContext(ThemeContext)
  return (
        <motion.main
        key={location.key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-center p-6"
        >

      <button
      className="w-full sm:w-xl md:w-2xl lg:w-3xl block rounded-lg text-3xl p-5 bg-green-500 ease-in duration-150 hover:bg-green-600 cursor-pointer" 
      onClick={() => handleDifficulty('Easy')}
      style={{color: theme.color, border: `2px solid ${theme.border}`}}
      aria-label="Select Easy Difficulty"
      role="button"
      >
        Easy
      </button>

      <button
      className="w-full sm:w-xl md:w-2xl lg:w-3xl rounded-lg text-3xl p-5 bg-yellow-500 my-10 ease-in duration-150 hover:bg-yellow-600 cursor-pointer"  
      onClick={() => handleDifficulty('Medium')}
      style={{color: theme.color, border: `2px solid ${theme.border}`}}
      aria-label="Select Medium Difficulty"
      role="button"
      >
        Medium
      </button>

      <button 
      className="w-full sm:w-xl md:w-2xl lg:w-3xl block rounded-lg text-3xl p-5 bg-red-500 ease-in duration-150 hover:bg-red-600 cursor-pointer" 
      onClick={() => handleDifficulty('Hard')}
      style={{color: theme.color, border: `2px solid ${theme.border}`}}
      aria-label="Select Hard Difficulty"
      role="button"
      >
        Hard
      </button>

    </motion.main>

  )
}

export default DisplayDifficulty
