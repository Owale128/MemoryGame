import { FormEvent } from "react"

interface IDisplayHomeForm {
    inputValue: string;
    setInputValue: (value: string) => void;
    handleSubmit: (e: FormEvent) => void;
}

const DisplayHomeForm = ({handleSubmit, inputValue, setInputValue}: IDisplayHomeForm) => {

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      value={inputValue}
      placeholder="Enter name"
      onChange={(e) => setInputValue(e.target.value)}
       />
    </form>
  )
}

export default DisplayHomeForm
