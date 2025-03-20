import { FormEvent, useContext } from "react"
import { ThemeContext } from "../context/ThemeContext";

interface IDisplayHomeForm {
    username: string;
    setUsername: (value: string) => void;
    handleSubmit: (e: FormEvent) => void;
}

const DisplayHomeForm = ({handleSubmit, username, setUsername}: IDisplayHomeForm) => {
  const theme = useContext(ThemeContext)
  return (
    <form 
    onSubmit={handleSubmit} 
    className="p-14 rounded-2xl ease-in duration-100"
    style={{
      border: `0.2rem solid ${theme.border}`
    }}
    >
      <input 
      type="text"
      value={username}
      placeholder="Enter name"
      onChange={(e) => setUsername(e.target.value)}
      className="border-2 border-black text-center mb-4 text-2xl ease-in duration-100"
      style={{ borderColor: theme.border, color: theme.color}}
       />
       <button 
       className="block mx-auto border-2 p-1 rounded-lg text-xl ease-in duration-100 cursor-pointer"
       style={{color: theme.color}}
       >
        Enter Game
        </button>
    </form>
  )
}

export default DisplayHomeForm
