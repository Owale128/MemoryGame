import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface IDisplayDifficulty {
    handleDifficulty: (diffi: string) => void;
}

const DisplayDifficulty = ({handleDifficulty}: IDisplayDifficulty) => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className="flex flex-col justify-center items-center p-6">
      <button
      className="w-full sm:w-xl md:w-2xl lg:w-3xl block rounded-lg text-3xl p-5 bg-green-500 ease-in duration-150 hover:bg-green-600 cursor-pointer" 
      onClick={() => handleDifficulty('Easy')}
      style={{color: theme.color, border: `2px solid ${theme.border}`}}
      >
        Easy
    </button>
      <button
      className="w-full sm:w-xl md:w-2xl lg:w-3xl rounded-lg text-3xl p-5 bg-yellow-500 my-10 ease-in duration-150 hover:bg-yellow-600 cursor-pointer"  
      onClick={() => handleDifficulty('Medium')}
      style={{color: theme.color, border: `2px solid ${theme.border}`}}
      >
        Medium
    </button>
      <button 
      className="w-full sm:w-xl md:w-2xl lg:w-3xl block rounded-lg text-3xl p-5 bg-red-500 ease-in duration-150 hover:bg-red-600 cursor-pointer" 
      onClick={() => handleDifficulty('Hard')}
      style={{color: theme.color, border: `2px solid ${theme.border}`}}
      >
        Hard
    </button>
    </div>
  )
}

export default DisplayDifficulty
