import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface IDisplayDifficulty {
    handleDifficulty: (diffi: string) => void;
}

const DisplayDifficulty = ({handleDifficulty}: IDisplayDifficulty) => {
  const theme = useContext(ThemeContext)
  return (
    <div>
      <button
      className="block border border-black rounded-lg text-3xl w-2xl p-4 bg-green-500 ease-in duration-150 hover:bg-green-600 cursor-pointer" 
      onClick={() => handleDifficulty('Easy')}
      style={{color: theme.color}}
      >
        Easy
    </button>
      <button
      className="block border border-black rounded-lg text-3xl w-2xl p-4 bg-yellow-500 my-10 ease-in duration-150 hover:bg-yellow-600 cursor-pointer"  
      onClick={() => handleDifficulty('Medium')}
      style={{color: theme.color}}
      >
        Medium
    </button>
      <button 
      className="block border border-black rounded-lg text-3xl w-2xl p-4 bg-red-500 ease-in duration-150 hover:bg-red-600 cursor-pointer" 
      onClick={() => handleDifficulty('Hard')}
      style={{color: theme.color}}
      >
        Hard
    </button>
    </div>
  )
}

export default DisplayDifficulty
