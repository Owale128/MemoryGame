import { FormEvent } from "react"

interface IDisplayHomeForm {
    inputValue: string;
    setInputValue: (value: string) => void;
    handleSubmit: (e: FormEvent) => void;
}

const DisplayHomeForm = ({handleSubmit, inputValue, setInputValue}: IDisplayHomeForm) => {

  return (
    <form onSubmit={handleSubmit} className="border-2 border-black">
      <input 
      type="text"
      value={inputValue}
      placeholder="Enter name"
      onChange={(e) => setInputValue(e.target.value)}
      className="border-2 border-black text-center"
       />
       <button className="block mx-auto border-2 border-black">Enter Game</button>
    </form>
  )
}

export default DisplayHomeForm
