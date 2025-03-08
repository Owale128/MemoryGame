import { FormEvent } from "react"

interface IDisplayHomeForm {
    inputValue: string;
    setInputValue: (value: string) => void;
    handleSubmit: (e: FormEvent) => void;
}

const DisplayHomeForm = ({handleSubmit, inputValue, setInputValue}: IDisplayHomeForm) => {

  return (
    <form onSubmit={handleSubmit} className="border-2 border-black p-10 rounded-2xl">
      <input 
      type="text"
      value={inputValue}
      placeholder="Enter name"
      onChange={(e) => setInputValue(e.target.value)}
      className="border-2 border-black text-center mb-4 text-xl"
       />
       <button className="block mx-auto border-2 p-1 rounded-lg cursor-pointer">Enter Game</button>
    </form>
  )
}

export default DisplayHomeForm
