import { FormEvent, useContext } from "react"
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom";


interface IDisplayHomeForm {
    username: string;
    setUsername: (value: string) => void;
    handleSubmit: (e: FormEvent) => void;
}

const DisplayHomeForm = ({handleSubmit, username, setUsername}: IDisplayHomeForm) => {
  const location = useLocation()
  const {theme} = useContext(ThemeContext)
  
  return (
    <motion.main
    key={location.key}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
    >
    <form 
    onSubmit={handleSubmit} 
    className="flex flex-col justify-center items-center py-10 w-80 rounded-2xl ease-in duration-100 sm:p-12 sm:w-full landscape:p-14"
    style={{
      border: `0.2rem solid ${theme.border}`,
      background: `linear-gradient(135deg, gray, white, gray`
    }}
    aria-live="assertive"
    >
      <input 
      type="text"
      value={username}
      placeholder="Enter your name"
      maxLength={12}
      onChange={(e) => setUsername(e.target.value)}
      className="w-56 text-2xl text-center border-2 border-black mb-4 p-1 ease-in duration-100 sm:w-full "
      aria-label="Enter you username"
      onFocus={(e) => (e.target.style.backgroundColor = 'white')}
      onBlur={(e) => (e.target.style.backgroundColor = '')}
      required
      />
       <button 
       className="text-2xl block mx-auto mt-4 border-2 p-1 rounded-lg ease-in duration-100 cursor-pointer hover:bg-white "
       aria-label="Submit your name and start the game"
       >
        Enter Game
        </button>
      </form>
      </motion.main>
  )
}

export default DisplayHomeForm
