import { FormEvent, useContext } from "react"
import { ThemeContext } from "../context/ThemeContext";

interface IDisplayHomeForm {
    username: string;
    setUsername: (value: string) => void;
    handleSubmit: (e: FormEvent) => void;
}

const DisplayHomeForm = ({handleSubmit, username, setUsername}: IDisplayHomeForm) => {
  const {theme} = useContext(ThemeContext)
  return (
    <form 
    onSubmit={handleSubmit} 
    className="py-12 px-6 sm:p-16 md:p-16 rounded-2xl ease-in duration-100 landscape:p-20 bg-"
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
      className="text-2xl text-center border-2 border-black mb-4 p-1 ease-in duration-100"
      aria-label="Enter you username"
      required
       />
       <button 
       className="text-2xl block mx-auto mt-4 border-2 p-1 rounded-lg ease-in duration-100 cursor-pointer"
       aria-label="Submit your name and start the game"
       >
        Enter Game
        </button>
    </form>
  )
}

export default DisplayHomeForm
